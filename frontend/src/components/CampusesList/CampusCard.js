import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
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
        <>
            {
                campuses ?
                <div key={campus.id}>
                    <div>
                        <Link to={`/campus/${campus.id}`} id='campus-name'>{campus.name}</Link>
                        <br></br>
                        {campus.city}
                        {campus.state}
                    </div>
                    <br></br>
                </div>
                : null
            }
        </>
    ))
}

export default CampusCard
