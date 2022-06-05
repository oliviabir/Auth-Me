import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/booking'

const DeleteBooking = ({ bookingId }) => {
    console.log(bookingId, 'BOOKING ID')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDelete = async (e) => {
        e.preventDefault()

        let bookingDeleted = await dispatch(deleteBooking(bookingId))

        if (bookingDeleted) {
            return history.push('/profile')
        }
    }

  return (
    <button onClick={handleDelete}>Cancel Booking</button>
  )
}

export default DeleteBooking
