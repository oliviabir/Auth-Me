import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBookings } from '../../store/booking'
import DeleteBooking from './DeleteBooking'
import './BookingCampusCard.css'

const BookingCampusCard = ({ bookingsObj }) => {
    const dispatch = useDispatch()

    const bookingsArr = Object.values(bookingsObj)

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    return bookingsArr.map((booking) => (
        <div className='booking-container' key={booking.id}>
            <div className='booking-name'>{booking.campusName}</div>
            <div>{booking.campusCity}, {booking.campusState}</div>
            <div>{booking.tourDate}</div>
            <DeleteBooking bookingId={booking.id}/>
            <br />
        </div>
    ))
}

export default BookingCampusCard
