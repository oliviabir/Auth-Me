import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ValidationError } from '../../utils/validationError'
import { editCampus } from '../../store/campus'

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
        <form onSubmit={handleSubmit} className='form'>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>School Name
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>City
                <input
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </label>
            <label>State
                <input
                    type='text'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
            </label>
            <label>Description
                <input
                    type='textarea'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>Tuition
                <input
                    type='number'
                    value={tuition}
                    onChange={(e) => setTuition(e.target.value)}
                    required
                />
            </label>
            <Link to='/campus'>Cancel</Link>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default EditCampusForm
