import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddCampusForm = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [description, setDescription] = useState('')
    const [tuition, setTuition] = useState(0)
    const [inStateTuition, setInStateTuition] = useState(0)
    const [publicSchool, setPublicSchool] = useState(false)
    const [privateSchool, setPrivateSchool] = useState(false)
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        // if (password === confirmPassword) {
        //   setErrors([])
        //   return dispatch(sessionActions.signUp({ email, username, password }))
        //     .catch(async (res) => {
        //       const data = await res.json()
        //       if (data && data.errors) setErrors(data.errors)
        //     })
        // }

        return setErrors([])
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
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>Tuition
                <input
                    type='integer'
                    value={tuition}
                    onChange={(e) => setTuition(e.target.value)}
                    required
                />
            </label>
            <label>In State Tuition
                <input
                    type='integer'
                    value={inStateTuition}
                    onChange={(e) => setInStateTuition(e.target.value)}
                />
            </label>
            <label>Public
                <input
                    type='boolean'
                    value={publicSchool}
                    onChange={(e) => setPublicSchool(e.target.value)}
                />
            </label>
            <label>Private
                <input
                    type='boolean'
                    value={privateSchool}
                    onChange={(e) => setPrivateSchool(e.target.value)}
                />
            </label>
            <a href='/campus'>Cancel</a>
        </form>
    )
}

export default AddCampusForm
