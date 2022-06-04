import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { getCampusList } from '../../store/campus';
import './CampusContainer.css'

const CampusCard = () => {
    const dispatch = useDispatch()
    const campusesObj = useSelector(state => state.campus)
    const campuses = Object.values(campusesObj)

    useEffect(() => {
        dispatch(getCampusList())
    }, [dispatch])

    return campuses.map((campus) => (
        <div key={campus.id}>
            {
                campuses ?
                <div>
                    <div className='campus-child-card' style={{backgroundImage: `url(${campus.Images[0].url})`}}>
                        <div className='card-text'>
                            <NavLink to={`/campus/${campus.id}`} id='campus-name' style={{color: 'antiquewhite'}}>{campus.name}</NavLink>
                            <br></br>
                            {campus.city}
                            {campus.state}
                        </div>
                    </div>
                    <br></br>
                </div>
                : null
            }
        </div>
    ))
}

export default CampusCard
