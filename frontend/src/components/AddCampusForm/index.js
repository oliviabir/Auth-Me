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

        let createdCampus
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
            <form onSubmit={handleSubmit} className='add-campus-form'>
                {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}
                <h1>Add a Campus</h1>
                <div className='add-form-container' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit)'}}>
                    <label className='add-campus-label' id='add-name-label'>School Name
                        <input
                            className='add-campus-input'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className='add-campus-label' id='add-city-label'>City
                        <input
                            className='add-campus-input'
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>
                    <label className='add-campus-label' id='add-state-label'>State
                        <input
                            className='add-campus-input'
                            type='text'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </label>
                    <label className='add-campus-label' id='add-description-label'>Description
                        <input
                            className='add-campus-input'
                            type='textarea'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label className='add-campus-label' id='add-tuition-label'>Tuition
                        <input
                            className='add-campus-input'
                            type='number'
                            value={tuition}
                            onChange={(e) => setTuition(e.target.value)}
                            required
                        />
                    </label>
                    <label className='add-campus-label' id='add-image-label'>Campus Image
                        <input
                            className='add-campus-input'
                            type='text'
                            value={url}
                            required
                            placeholder='Enter Image URL'
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <label className='add-campus-label' id='add-imgdesc-label'>Image Description
                        <input
                            className='add-campus-input'
                            type='text'
                            value={alt}
                            required
                            placeholder='Description of Image'
                            onChange={(e) => setAlt(e.target.value)}
                        />
                    </label>
                </div>
                <div className='add-form-buttons'>
                    <Link to='/campus' className='add-cancel-link'>Cancel</Link>
                    <button type='submit' className='add-submit-btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddCampusForm
