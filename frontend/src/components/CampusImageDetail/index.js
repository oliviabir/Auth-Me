import React from 'react'
import './CampusImageDetail.css'

const CampusImageDetail = ({campus}) => {
  const imagesArr = campus.Images

  return (
      <div className='detail-image-container'>
          <div className='image-one-container'>
              <img id='first-image' src={imagesArr[0].url}/>
          </div>
          <div className='image-two-container'>
              {
                imagesArr[1] ?
                <img id='second-image' src={imagesArr[1].url} />
                : <img src='https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MzU3NTE5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'/>
              }
          </div>
          <div className='image-three-container'>
              {
                imagesArr[2] ?
                <img id='third-image' src={imagesArr[2].url} />
                : <img src='https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODI4Mjg4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' />
              }
          </div>
      </div>
  )
}

export default CampusImageDetail
