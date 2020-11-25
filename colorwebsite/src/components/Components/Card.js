import React from 'react'
import '../css/Card.css'
const Card = ({ iconClass, cardTitle, CardDescription, mode }) => {
  return (
    <>
      <div className='col-lg-4  col-md-6 my-4'>
        <div
          className='card card2'
          style={{
            background: mode ? '#fff' : '#333333',
            color: mode ? '#333333' : '#fff',
          }}
        >
          <div className='card-body'>
            <div className='text-center'>
              <i className={`${iconClass}  mb-3`}></i>
            </div>
            <p className='card-title font-weight-bold text-center'>
              {cardTitle}
            </p>
            <p className='card-text'>{CardDescription}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
