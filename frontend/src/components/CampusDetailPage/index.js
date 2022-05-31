import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CampusImageDetail from '../CampusImageDetail'
import './CampusPage.css'

const CampusDetail = () => {
    const { campusId } = useParams()
    // const campus =  campus.find(campus => campus.id === campusId)
    // console.log(campus)
  return (
    <div>
        <CampusImageDetail />
    </div>
  )
}

export default CampusDetail
