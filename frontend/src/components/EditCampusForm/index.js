import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ValidationError } from '../../utils/validationError'
import { editCampus } from '../../store/campus'
import './EditCampusForm.css'

const EditCampusForm = ({ campus }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)

    const [name, setName] = useState(campus.name)
    const [city, setCity] = useState(campus.city)
    const [state, setState] = useState(campus.state)
    const [description, setDescription] = useState(campus.description)
    const [tuition, setTuition] = useState(campus.tuition)
    const [errors, setErrors] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()

        const userId = sessionUser.id

        const payload = {
            userId,
            name,
            city,
            state,
            description,
            tuition,
        }

        let editedCampus;

        try {
            editedCampus = await dispatch(editCampus(payload, campus.id))
        } catch (error) {
            if (error instanceof ValidationError) setErrors(errors.error)
            else setErrors({ overall: error.toString().slice(7) })
        }

        if (editedCampus) {
            setErrors([])
            return history.push('/campus')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='edit-form'>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label className='edit-label' id='edit-name-label'>School Name
                <input
                    className='edit-input'
                    id='edit-name-input'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label className='edit-label' id='edit-city-label'>City
                <input
                    className='edit-input'
                    id='edit-city-input'
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </label>
            <label className='edit-label' id='edit-state-label'>State
                <input
                    className='edit-input'
                    id='edit-state-input'
                    type='text'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
            </label>
            <label className='edit-label' id='edit-description-label'>Description
                <input
                    className='edit-input'
                    id='edit-description-input'
                    type='textarea'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label className='edit-label' id='edit-tuition-label'>Tuition
                <input
                    className='edit-input'
                    id='edit-tuition-input'
                    type='number'
                    value={tuition}
                    onChange={(e) => setTuition(e.target.value)}
                    required
                />
            </label>
            <Link to='/campus' className='edit-form-btns' id='cancel-edit'>Cancel</Link>
            <button type='submit' className='edit-form-btns' id='submit-edit'>Submit</button>
        </form>
    )
}

export default EditCampusForm
