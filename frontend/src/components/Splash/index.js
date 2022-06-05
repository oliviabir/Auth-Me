import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Splash.css'

const Splash = () => {
  const dispatch = useDispatch()
  const history = useHistory()

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
        <div className='splash-flex-container'>
              <h1 className='splash-main-text'>Find yourself on campus.</h1>
              <h2 className='splash-second-text'>Discover campuses around the country and book a tour.</h2>
              <button type='submit' onClick={handleSubmit} className='demo-btn'>Demo Login</button>
        </div>
        <div className='splash-grid-container'>
            <div className='splash-main-img-container'>
                <img className='splash-main-img' src='https://images.unsplash.com/photo-1583373834259-46cc92173cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDMwNTA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' alt='campusImg'/>
            </div>
            <div className='splash-image-card' id='explore-campus-card' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjU1NzQ1MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)'}}>
                <Link to='/campus' className='campus-link'>Explore Campuses</Link>
            </div>
            <div className='splash-image-card'id='featured-image-card' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1627626308896-4426d7c74c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0ODg0NDEzMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)'}}>
                <Link to='/campus/11' className='campus-link'>Featured Campus</Link>
            </div>
        </div>
        <footer>
            <Link to={{ pathname: 'https://github.com/oliviabir'}} className='about-links' target='_blank'>
                <i className='fa-brands fa-github'></i>
            </Link>
            <Link to={{ pathname: 'https://www.linkedin.com/in/olivia-bir-74b16b7b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhIpATu1WRI2%2FsBi7q7h8Hw%3D%3D'}} className='about-links' target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
            </Link>
        </footer>
    </div>
  )
}

export default Splash;
