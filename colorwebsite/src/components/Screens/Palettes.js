import React from 'react'
import '../css/Palettes.css'
function Palettes() {
  return (
    <div>
      color
      <div
        className='alert alert-warning alert-dismissible fade show'
        role='alert'
      >
        <strong>Hey!</strong> Under Development
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </div>
  )
}

export default Palettes
