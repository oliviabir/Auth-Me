import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCampusList } from '../../store/campus';
import CampusImageDetail from '../CampusImageDetail'
import './CampusPage.css'

const CampusDetail = () => {
    // const { campusId } = useParams()
    // const campus =  useSelector(state => state.campus[campusId])
    // console.log(campus, 'this is the campus')
    const campus = useSelector(state => {
      return Object.values(state.campus)
    })
    console.log(campus, 'THIS IS CAMPUS')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCampusList())
    }, [dispatch])

  return (
    <div>
        <div>{campus.name}</div>
        <CampusImageDetail />
    </div>
  )
}

export default CampusDetail
