import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';

const Splash = () => {
  const dispatch = useDispatch()

  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])

    return dispatch(sessionActions.login({ credential: 'DemoUser', password: 'password' }))
      .catch(async (res) => {
        const data = await res.json()
        if (data && data.errors) setErrors(data.errors)
      })
  }

  return (
    <div className='splash-container'>
      <h1>Find yourself on campus.</h1>
      <h2>Discover campuses around the country and book a tour.</h2>
      <button type='submit' onClick={handleSubmit}>Demo Login</button>
      <h1>Splash</h1>
      <h1>Splash</h1>
    </div>
  )
}

export default Splash;
