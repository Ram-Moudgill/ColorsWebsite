import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Maintemp.css'
import Avatar from '../Screens/Avatar'

const Maintemp = ({ palettefortemp }) => {
  const { color1, color2, color3, color4 } = palettefortemp
  console.log(color1)
  return (
    <>
      <div className='row p-0 m-0'>
        <div className=' col-12 mx-auto'>
          <nav class='navbar navbar_style navbar-expand-lg  '>
            <a class='navbar-brand' href='#'>
              Colors
            </a>
          </nav>
          <div class='custom-shape-divider-bottom-1606045216'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                class='shape-fill'
              ></path>
            </svg>
          </div>
        </div>

        <div className='col-md-12 main-flex'>
          <h2 style={{ color: color1 }}>Basic template</h2>
          <p style={{ color: color2 }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at it's layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <div className='btnBtn'>
            <button className='btn btn-primary' style={{ background: color3 }}>
              Try Yourself
            </button>
          </div>
        </div>

        <div className='col-md-12 text-center'>
          <Avatar palettefortemp={palettefortemp} />
        </div>
      </div>
    </>
  )
}

export default Maintemp
