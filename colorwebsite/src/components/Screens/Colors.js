import React from 'react'
import Color from '../Components/Color'
import Loading from '../Components/Loading'
const colors = ({ collection, loading }) => {
  if (loading) {
    return <Loading></Loading>
  } else {
    return (
      <>
        <div className='row mt-4 mx-0' variant='top'>
          <div className='col-md-10 mx-auto'>
            <h4 className='font-weight-light'>Colors</h4>
            <div className='row'>
              {collection.map((co) => (
                <div key={co._id} className='col-lg-4  col-sm-6'>
                  <Color co={co}></Color>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}
// }
// }

export default colors
