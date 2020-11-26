import React from 'react'
const Loading = () => {
  return (
    <>
      <div
        className='row d-flex justify-content-center align-items-center m-0'
        style={{ height: '50vh' }}
      >
        <div className='lds-ring mt-3 text-center d-block'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Loading
