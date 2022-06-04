import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from '../../store/booking'

const BookingCampusCard = () => {
    const dispatch = useDispatch()

    const bookingsObj = useSelector(state => state.booking)
    const bookingsArr = Object.values(bookingsObj)

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    return bookingsArr.map((booking) => (
        <div className='booking-container'>
            <div>{booking.campusName}</div>
            <div>{booking.campusCity}</div>
            <div>{booking.campusState}</div>
            <div>{booking.tourDate}</div>
            <br />
        </div>
    ))
}

export default BookingCampusCard
