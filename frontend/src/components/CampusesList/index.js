import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getCampusList } from '../../store/campus';
import CampusCard from './CampusCard';
import './CampusContainer.css'

const CampusList = () => {
  //   const dispatch = useDispatch()
  //   const campuses = useSelector(state => {
  //       return Object.values(state.campus)
  //   })

  //   useEffect(() => {
  //     dispatch(getCampusList())
  // }, [dispatch])

    return (
      <div className='campus-container'>
            <CampusCard />
            <Link to='/campus/new' id='add-campus-btn'>
                Add a Campus
            </Link>
      </div>
    )
}

export default CampusList
