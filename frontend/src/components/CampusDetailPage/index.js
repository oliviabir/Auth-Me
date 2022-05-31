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
    // const campus =  useSelector(state => state.campus[campusId])
    // console.log(campus, 'this is the campus')
    // const campus = useSelector(state => state.campus.id === campusId)
    const campuses = useSelector(state => {
      return Object.values(state.campus)
    })

    console.log(campuses, 'THIS IS CAMPUS')
    console.log(campusId, 'THIS IS CAMPUS ID')

    useEffect(() => {
        dispatch(getCampus(campusId))
    }, [dispatch])

  return (
    <div>
        {/* <div>{campus.name}</div> */}
        <CampusImageDetail />
    </div>
  )
}

export default CampusDetail
