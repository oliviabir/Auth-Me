import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from '../../store/booking'
import DeleteBooking from './DeleteBooking'
import './BookingCampusCard.css'

const BookingCampusCard = ({ bookingsObj }) => {
    const dispatch = useDispatch()

    // const bookingsObj = useSelector(state => state.booking)
    console.log(bookingsObj)
    const bookingsArr = Object.values(bookingsObj)

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    return bookingsArr.map((booking) => (
        <div className='booking-container' key={booking.id}>
            <div className=''>{booking.campusName}</div>
            <div>{booking.campusCity}, {booking.campusState}</div>
            <div>{booking.tourDate}</div>
            <DeleteBooking bookingId={booking.id}/>
            <br />
        </div>
    ))
}

export default BookingCampusCard
