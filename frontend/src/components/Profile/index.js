import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from '../../store/booking'
import BookingCampusCard from '../BookingCampusCard'
import './Profile.css'

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const bookingsObj = useSelector(state => state.booking)

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    return (
        <div className='profile-container'>
            <h1>{user.username}'s Profile</h1>
            <BookingCampusCard bookingsObj={bookingsObj}/>
        </div>
    )
}

export default Profile
