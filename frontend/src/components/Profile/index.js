import React from 'react'
import { useSelector } from 'react-redux'
import './Profile.css'

const Profile = () => {
    const user = useSelector(state => state.session.user)
    const bookings = useSelector(state => state.booking)
    console.log('******BOOKINGS', console.log(bookings))
    return (
        <div className='profile-container'>
            <h1>{user.username}'s Profile</h1>
            <h2>Profile</h2>
            <div>Profile</div>
            <div>Profile</div>
            <div>Profile</div>
        </div>
    )
}

export default Profile
