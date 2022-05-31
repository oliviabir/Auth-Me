import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCampusList } from '../../store/campus';

const CampusList = () => {
    const campuses = useSelector(state => {
        return Object.values(state.campus)
      })
      console.log(campuses, 'THIS IS CAMPUS')
      const dispatch = useDispatch()

      useEffect(() => {
          dispatch(getCampusList())
      }, [dispatch])

    return campuses.map((campus) => (
      <div>
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

export default CampusList
