import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
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
            <a href='/campus/new' id='add-campus-btn'>
                Add a Campus
            </a>
      </div>
    )
}

export default CampusList
