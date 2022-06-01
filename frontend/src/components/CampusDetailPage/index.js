import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCampus } from '../../store/campus';
import CampusImageDetail from '../CampusImageDetail'
import './CampusPage.css'

const CampusDetail = () => {
    const { campusId } = useParams()
    const dispatch = useDispatch()
    const campusObj =  useSelector(state => state.campus)
    const campus = campusObj.campus


    console.log(campus, 'THIS IS CAMPUS')
    console.log(campusId, 'THIS IS CAMPUS ID')
    // console.log(campus.name, 'CAMPUS NAME')

    useEffect(() => {
        dispatch(getCampus(campusId))
    }, [dispatch])

  return (
    <>
      {
        campus ?
        <div>
            {/* <h1>{campus.name}</h1> */}
            <div>
              <CampusImageDetail />
            </div>
        </div>
        : null
      }
    </>
  )
}

export default CampusDetail
