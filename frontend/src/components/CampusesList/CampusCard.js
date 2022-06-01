import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCampusList } from '../../store/campus';
// import '/campusContainer.css'

const CampusCard = () => {
    const dispatch = useDispatch()
    const campuses = useSelector(state => {
        return Object.values(state.campus)
      })

      useEffect(() => {
          dispatch(getCampusList())
      }, [dispatch])

    return campuses.map((campus) => (
      <div key={campus.name}>
          <div>
              {campus.name}
              <br></br>
              {campus.city}
              {campus.state}
          </div>
          <br></br>
      </div>
    ))
}

export default CampusCard
