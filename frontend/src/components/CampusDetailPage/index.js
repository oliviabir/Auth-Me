import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCampus, deleteCampus } from '../../store/campus';
import { Modal } from '../../context/Modal';
import AddBookingForm from '../AddBookingForm';
import CampusImageDetail from '../CampusImageDetail'
import EditCampusForm from '../EditCampusForm';
import './CampusPage.css'

const CampusDetail = () => {
    const { campusId } = useParams()
    const campusObj =  useSelector(state => state.campus)
    const campus = campusObj.campus

    const dispatch = useDispatch()
    const history = useHistory()

    const [showEditModal, setShowEditModal] = useState(false)
    const [showBookingModal, setShowBookingModal] = useState(false)

    useEffect(() => {
        dispatch(getCampus(campusId))
    }, [dispatch])


    const handleDelete = async (e) => {
      e.preventDefault()

      let campusDelete = await dispatch(deleteCampus(campusId))

      if (campusDelete) {
        return history.push('/campus')
      }
    }

  return (
    <>
      {
        campus ?
        <div className='campus-detail-container'>
            <div className='campus-detail-info'>
                <h1 className='campus-name-detail'>{campus.name}</h1>
                <h4 className='campus-location-detail'>{campus.city}, {campus.state}</h4>
                <h3 className='campus-tuition-detail'>Tuition: ${campus.tuition}</h3>
            </div>
            <div className='campus-image-detail-container'>
                <CampusImageDetail campus={campus}/>
            </div>
            <h2 className='description-label-detail'>Description</h2>
            <div className='campus-description-detail'>{campus.description}</div>
            <button onClick={() => setShowBookingModal(true)}>Book a Tour</button>
            {showBookingModal && (
                <Modal onClose={() => setShowBookingModal(false)}>
                    <div className='add-booking-div'>
                        <AddBookingForm campus={campus}/>
                    </div>
                </Modal>
            )}
            <button onClick={() => setShowEditModal(true)}>Edit Campus</button>
            {showEditModal && (
                <Modal onClose={() => setShowEditModal(false)}>
                  <EditCampusForm campus={campus} />
                </Modal>
            )}
            <button onClick={handleDelete}>
              Delete Campus
            </button>
        </div>
        :null
      }
    </>
  )
}

export default CampusDetail
