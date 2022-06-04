import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from '../../store/booking'
import BookingCampusCard from '../BookingCampusCard'
import './Profile.css'

const Profile = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    const bookingsObj = useSelector(state => state.booking)
    // console.log(bookingsObj, 'BOOKINGS OBJ')
    const bookingsArr = Object.values(bookingsObj)

    // const campusArr = []

    // bookingsArr.map((booking) => {
    //     const campus = booking.Campus
    //     console.log(campus, 'CAMPUS')
    //     // const name = campus.name

    //     campusArr.push(campus)
    // })

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    return bookingsArr.map((booking) => (
        <div className='profile-container'>
            <h1>{user.username}'s Profile</h1>
            <h2>Profile</h2>
            <div>{booking.tourDate}</div>
            <BookingCampusCard campusId={booking.campusId}/>
        </div>
    ))
}

export default Profile
