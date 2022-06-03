import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { ValidationError } from '../../utils/validationError'
import { createBooking } from '../../store/booking'
import Calendar from 'react-calendar'

const AddBookingForm = ({ campus }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    console.log('add booking form hit')

    const sessionUser = useSelector(state => state.session.user)

    const [tourDate, setTourDate] = useState(new Date())
    const [errors, setErrors] = useState({})

    const changeDate = (e) => {
        setTourDate(e)
    }

    console.log(tourDate, '<<<<TOUR DATE')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userId = sessionUser.id
        const campusId = campus.id

        const payload = {
            userId,
            campusId,
            tourDate,
        }

        let createdBooking
        try {
            createdBooking = await dispatch(createBooking(payload))
        } catch (error) {
            if (error instanceof ValidationError) setErrors(errors.error)
            else setErrors({ overall: error.toString().slice(7)})
        }

        if (createdBooking) {
            setErrors({})
            return history.push('/bookings')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>{campus.name}</h2>
        <Calendar
            value={tourDate}
            onChange={changeDate}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddBookingForm
