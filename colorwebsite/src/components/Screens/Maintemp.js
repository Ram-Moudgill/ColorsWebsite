import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Maintemp.css'
import Avatar from '../Screens/Avatar'
import PropTypes from 'prop-types'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { IconButton } from '@material-ui/core'
import Palettediv from '../Components/Palettediv'
import Footer from '../Components/Footer'

const Maintemp = ({ palettefortemp, sidebarstatus }) => {
  const { color1, color2, color3, color4 } = palettefortemp
  sidebarstatus()
  return (
    <>
      <div className='row p-0 m-0'>
        <div className=' col-12 mx-auto'>
          <nav
            class='navbar navbar_style navbar-expand-lg'
            style={{
              background: color1 ? color1 : 'yellow',
              color: color3 ? color3 : '#000',
            }}
          >
            <IconButton onClick={sidebarstatus}>
              {' '}
              <i
                class='fas fa-bars'
                aria-hidden='true'
                style={{
                  color: color3 ? color3 : '#000',
                }}
              ></i>
            </IconButton>

            <a
              class='navbar-brand'
              href='#'
              style={{
                color: color3 ? color3 : '#000',
              }}
            >
              Million Colors
            </a>
            <div className='ml-auto'>
              <a
                class='navbar-brand '
                href='#'
                style={{
                  color: color3 ? color3 : '#000',
                }}
              >
                <HomeOutlinedIcon></HomeOutlinedIcon>
              </a>
              <a
                class='navbar-brand '
                href='#'
                style={{
                  color: color3 ? color3 : '#000',
                }}
              >
                <GroupOutlinedIcon></GroupOutlinedIcon>
              </a>
            </div>
          </nav>
          <div className='text-center'>
            <h1
              className=' mt-5 '
              style={{
                color: color3 ? color3 : '#000',
                zIndex: '100',
                fontWeight: 900,
                fontSize: '1.8rem',
                lineHeight: ' 35.3px',
                wordSpacing: '3px',
              }}
            >
              We Provide the Best Color Schemas <br></br>
              For Your Brands and Designs
            </h1>
            <p
              style={{
                color: color3 ? color3 : '#000',
                opacity: '0.6',
              }}
            >
              Get largest collection of Colors,Gradients and Palettes on one
              place
            </p>
            <button
              className='temp_btn mt-2'
              style={{
                color: color3 ? color3 : '#000',
                background: color1,
              }}
            >
              Get Started
            </button>
          </div>
          <div
            class='custom-shape-divider-bottom-1606045216'
            style={{ background: color1 ? color1 : 'yellow' }}
          >
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
        <div className='col-md-12 text-center'>
          <Avatar color1={color1} />
        </div>
        <h1
          className=' text-center w-100'
          style={{
            color: color3 ? color3 : '#000',
            zIndex: '100',
            fontWeight: 900,
          }}
        >
          This Schema
        </h1>
      </div>
    </>
  )
}
// Maintemp.defaultProps={
//   color1:'red'
// }
export default Maintemp
