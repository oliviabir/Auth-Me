import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from '../../store/booking'
import BookingCampusCard from '../BookingCampusCard'
import './Profile.css'

const Profile = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div className='profile-container'>
            <h1>{user.username}'s Profile</h1>
            <BookingCampusCard />
        </div>
    )
}

export default Profile
