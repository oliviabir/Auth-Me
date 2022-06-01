import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCampusList } from '../../store/campus';
import AddCampusForm from '../AddCampusForm';
import CampusCard from './CampusCard';
// import '/campusContainer.css'

const CampusList = () => {

    return (
      <div className='campus-container'>
            <CampusCard />
            <a href='/new'>
                Add a Campus
                <AddCampusForm />
            </a>
      </div>
    )
}

export default CampusList
