import React from 'react'

const Card = ({ iconClass, cardTitle, CardDescription, mode }) => {
  return (
    <>
      <div className='col-md-4 my-4'>
        <div
          className='card '
          style={{
            background: mode ? '#fff' : '#333333',
            color: mode ? '#333333' : '#fff',
          }}
        >
          <div className='card-body'>
            <div className='text-center'>
              <i className={`${iconClass} card__icon mb-3`}></i>
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
