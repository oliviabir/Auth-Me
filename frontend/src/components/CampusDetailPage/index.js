import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCampusList, deleteCampus } from '../../store/campus';
import { Modal } from '../../context/Modal';
import AddBookingForm from '../AddBookingForm';
import CampusImageDetail from '../CampusImageDetail'
import EditCampusForm from '../EditCampusForm';
import './CampusPage.css'

const CampusDetail = () => {
    const { campusId } = useParams()
    const campusObj =  useSelector(state => state.campus)
    const campuses = Object.values(campusObj)
    const campus = campuses.find(campus => campus.id == campusId)

    console.log(campus, 'CAMPUS')

    const dispatch = useDispatch()
    const history = useHistory()

    const [showEditModal, setShowEditModal] = useState(false)
    const [showBookingModal, setShowBookingModal] = useState(false)

    useEffect(() => {
      dispatch(getCampusList())
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
            <div className='detail-buttons'>
                <button onClick={() => setShowBookingModal(true)} className='detail-btn'>
                    Book a Tour
                </button>
                {showBookingModal && (
                    <Modal onClose={() => setShowBookingModal(false)}>
                        <AddBookingForm campus={campus}/>
                    </Modal>
                )}
                <button onClick={() => setShowEditModal(true)} className='detail-btn' id='edit-detail-btn'>
                    Edit Campus
                </button>
                {showEditModal && (
                    <Modal onClose={() => setShowEditModal(false)}>
                        <EditCampusForm campus={campus} />
                    </Modal>
                )}
                <button onClick={handleDelete} className='detail-btn' id='delete-detail-btn'>
                  Delete Campus
                </button>
            </div>
        </div>
        :null
      }
    </>
  )
}

export default CampusDetail
