import React from 'react'
import gif from '../images/fxcT.gif'
const Development = () => {
  return (
    <>
      <div className='row mx-0 mt-5 d-flex align-items-center justify-content-center'>
      <div className="col-md-6 mt-5">
      <h5 className='text-center mt-5'>
          This section is under Under development
        </h5>
      </div>
       <div className="col-md-6 mt-5">
        <img src={gif} alt="" style={{height:'200px',width:'200px'}}/></div>
      </div>
    </>
  )
}

export default Development
