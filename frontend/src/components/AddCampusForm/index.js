import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addCampus } from "../../store/campus";
import { ValidationError } from "../../utils/validationError";
import './AddCampusForm.css'

const AddCampusForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)


    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [description, setDescription] = useState('')
    const [tuition, setTuition] = useState(0)
    const [url, setUrl] = useState('')
    const [alt, setAlt] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userId = sessionUser.id

        const payload = {
            userId,
            name,
            city,
            state,
            description,
            tuition,
            url,
            alt
        }

        console.log(payload, 'PAYLOAD')
        let createdCampus
        // let createdCampus = await dispatch(addCampus(payload))
        try {
            createdCampus = await dispatch(addCampus(payload))
            console.log(createdCampus, 'CREATED CAMPUSSS')
        } catch (error) {
            if (error instanceof ValidationError) setErrors(errors.error)
            else setErrors({ overall: error.toString().slice(7) })
        }

        if (createdCampus) {
            setErrors({})
            return history.push('/campus')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}
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
                <div>
                    <input
                        type='text'
                        value={url}
                        required
                        placeholder='Enter Image URL'
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <input
                        type='text'
                        value={alt}
                        required
                        placeholder='Description of Image'
                        onChange={(e) => setAlt(e.target.value)}
                    />
                </div>
                <Link to='/campus'>Cancel</Link>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddCampusForm
