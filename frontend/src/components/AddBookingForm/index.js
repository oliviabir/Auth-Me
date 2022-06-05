import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { ValidationError } from '../../utils/validationError'
import { createBooking } from '../../store/booking'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './AddBookingForm.css'

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
        const campusName = campus.name
        const campusCity = campus.city
        const campusState = campus.state

        const payload = {
            userId,
            campusId,
            campusName,
            campusCity,
            campusState,
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
            return history.push('/campus')
        }
    }

  return (
    <form onSubmit={handleSubmit} className='booking-form-container'>
        <h3 className='book-tour-heading'>Book a Tour</h3>
        <Calendar
            className='booking-calendar'
            value={tourDate}
            onChange={changeDate}
        />
        <button type='submit' className='submit-booking-btn'>Book tour</button>
    </form>
  )
}

export default AddBookingForm
