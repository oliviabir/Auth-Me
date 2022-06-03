import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { getCampusList } from '../../store/campus';
import './CampusContainer.css'

const CampusList = () => {
    const dispatch = useDispatch()
    const campusesObj = useSelector(state => state.campus)
    const campuses = Object.values(campusesObj)
    console.log(campusesObj, 'THIS IS CAMPUSES OBJ -- CAMPUS CARD')
    console.log(campuses, 'THIS IS CAMPUSES --- CAMPUS CARD')

    let Images
    let imgArr = []
    campuses.map((campus) => {
        Images = campus.Images
        // console.log(Images, '****images')
        let arr = Object.values(Images)
        // console.log(arr, '*****arr')
        // console.log(arr[0], '****arr[0]')
        const cardImg = arr[0]
        const values = Object.values(cardImg)
        // console.log(values, '****values')
        console.log(values[2], 'values[2]')
        // console.log(cardImg.url, '****carImg.url')
        const imageURL = values[2]
        imgArr.push(imageURL)
        // console.log(imgArr, '***imgArr')


        return imgArr
    })

    useEffect(() => {
        dispatch(getCampusList())
    }, [dispatch])

    return campuses.map((campus) => (
        <div className='campus-container' key={campus.id}>
            {
                campuses ?
                <div>
                    <div className='campus-child-card'>
                        <img style={{backgroundImage: `url(${imgArr[campus.id -1]})`}}/>
                        <NavLink to={`/campus/${campus.id}`} id='campus-name'>{campus.name}</NavLink>
                        <br></br>
                        {campus.city}
                        {campus.state}
                    </div>
                    <br></br>
                </div>
                : null
            }
        </div>
    ))
}

export default CampusList
