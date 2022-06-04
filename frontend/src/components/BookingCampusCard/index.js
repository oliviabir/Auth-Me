import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCampus } from '../../store/campus'

const BookingCampusCard = ({ campusId }) => {
    const dispatch = useDispatch()

    const campusObj = useSelector(state => state.campus)
    const campus = campusObj.campus
    console.log(campus.name, 'CAMPUS')

    useEffect(() => {
        dispatch(getCampus(campusId))
    }, [dispatch])

    return (
        <div>
            <h1>{campus.name}</h1>
            <div>{campus.city}</div>
        </div>
    )
}

export default BookingCampusCard
