import React from 'react'
import Gradient from '../Components/Gradient'
import Loading from '../Components/Loading'
const Gradients = ({ gradientcollection, loading }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <>
        <div className='row mt-4 p-0 mx-0'>
          <div className='col-md-10 mx-auto'>
            <h2>Gradient Palette</h2>
            <div className='row'>
              {gradientcollection.map((bg) => (
                <div className='col-lg-4 col-sm-6' key={bg._id}>
                  <Gradient bg={bg}></Gradient>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Gradients
