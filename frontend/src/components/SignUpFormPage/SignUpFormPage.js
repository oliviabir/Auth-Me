import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css'

function SignupFormPage() {
  const dispatch = useDispatch()

  const sessionUser = useSelector((state) => state.session.user)

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState([])

  if (sessionUser) return <Redirect to="/" />

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password === confirmPassword) {
      setErrors([])
      return dispatch(sessionActions.signUp({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json()
          if (data && data.errors) setErrors(data.errors)
        })
    }

    return setErrors(['Confirm Password field must be the same as the Password field'])
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className='inputField'>
        <input
          className='input'
          type="text"
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className='inputField'>
        <input
          className='input'
          type="text"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className='inputField'>
        <input
          className='input'
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className='inputField'>
        <input
          className='input'
          type="password"
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className='button'>Join HipCampus</button>
    </form>
  );
}

export default SignupFormPage;
