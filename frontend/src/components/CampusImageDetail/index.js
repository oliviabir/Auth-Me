import React from 'react'
import './CampusImageDetail.css'
import { useSelector } from 'react-redux'


const CampusImageDetail = ({campus}) => {
  const imagesArr = campus.Images
  // const campusesObj = useSelector(state => state.campus)
  // const campuses = Object.values(campusesObj)
  // const campus = campuses[campusId - 1]
  console.log('CAMPUSID - IMAGE DETAIL', imagesArr)
  // console.log('CAMPUSES OBJ', campusesObj)
  // console.log('CAMPUSESOBJ AT ID', campusesObj.campusId)
  // console.log('CAMPUSES OBJ.VALUES(CAMPUSOBJ)', campuses)
  // console.log('***campuses at id', campuses[campusId - 1])
  // console.log(campus, 'CAMPUS')
  return (
      <div className='detail-image-container'>
          <div className='image-one-container'>
              <img src={imagesArr[0].url}/>
          </div>
          <div className='image-two-container'>
              {
                imagesArr[1] ?
                <img src={imagesArr[1].url} />
                : <img src='https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MzU3NTE5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'/>
              }
          </div>
          <div className='image-three-container'>
              {
                imagesArr[2] ?
                <img src={imagesArr[2].url} />
                : <img src='https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODI4Mjg4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' />
              }
          </div>
      </div>
  )
}

export default CampusImageDetail
