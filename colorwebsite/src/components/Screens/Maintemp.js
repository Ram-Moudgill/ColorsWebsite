import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Maintemp.css'
import Avatar from '../Screens/Avatar'
import PropTypes from 'prop-types'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { IconButton } from '@material-ui/core'
import Palettediv from '../Components/Palettediv'
import Footer from '../Components/Footer'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import man from '../images/newimg.png'

const Maintemp = ({ palettefortemp, sidebarstatus }) => {
  const { color1, color2, color3, color4 } = palettefortemp
  const [text, setText] = useState('')
  sidebarstatus()

  function CopytoClipBoard() {
    setText('Copied!')
    setTimeout(() => {
      setText('')
    }, 700)
  }
  return (
    <>
    <div className="container-fluid p-0 m-0"  style={{
              background: color2 ? color2 : '#fff',position:'sticky'
            }}   >
      <div className='row p-0 m-0'  >
        <div className=' col-12 m-0 p-0'  >
          <nav
            class='navbar navbar_style w-100'
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
              className=''
              style={{
                color: color3 ? color3 : '#000',
                zIndex: '100',
                marginTop: 75,
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
            // style={{ background: color4 ? color4 : 'yellow' }}
          >
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                class='shape-fill' fill={color1}
              ></path>
            </svg>
          </div>
        </div>
        <div className='col-md-12 text-center' >
          <Avatar color1={color1} />
        </div>

        <div className='col-md-12 copy_btn'>
          <h1
            className=' text-left'
            style={{
              color: color3 ? color3 : '#000',
              zIndex: '100',
              fontWeight: 900,
            }}
          >
            This Palette
          </h1>
          <p
            className='text-muted'
            style={{
              color: color3 ? color3 : '#000',
              fontWeight: 900,
              lineHeight: 0,
            }}
          >
            Click to copy the hex code to your clipboard
          </p>
          <h5
            className='pt-3'
            style={{ color: color3 ? color3 : '#000', fontWeight: 900 }}
          >
            Elements
          </h5>
          <div className='main_btn'>
            <CopyToClipboard text={{ color1 }}>
              <div
                className='background'
                onClick={CopytoClipBoard}
                style={{ color: color3 ? color3 : '#000' }}
              >
                Background
                <span
                  style={{
                    fontSize: 14,
                    position: 'absolute',
                    right: 15,
                    top: 13,
                  }}
                >
                  {text}
                </span>
              </div>
            </CopyToClipboard>
            <div
              className='heading'
              style={{ color: color3 ? color3 : '#000' }}
            >
              Heading
            </div>
          </div>
          <div className='main_btn'>
            <div
              className='Paragraph'
              style={{ color: color3 ? color3 : '#000' }}
            >
              Paragraph
            </div>
            <div className='Button' style={{ color: color3 ? color3 : '#000' }}>
              Button
            </div>
          </div>
          <h5
            className='pt-3'
            style={{ color: color3 ? color3 : '#000', fontWeight: 900 }}
          >
            Illustrator
          </h5>
          <div className='main_btn'>
            <div className='stroke' style={{ color: color3 ? color3 : '#000' }}>
              Stroke
            </div>
            <div className='Main' style={{ color: color3 ? color3 : '#000' }}>
              Main
            </div>
          </div>
          <div className='main_btn'>
            <div className='fill' style={{ color: color3 ? color3 : '#000' }}>
              Fill
            </div>
            <div
              className='highlight'
              style={{ color: color3 ? color3 : '#000' }}
            >
              Highlight
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-center'>Services</h2>
      <div className="row d-flex justify-content-center my-4">
      <div className="col-md-5">
      <div class="card"  style={{ color: color3 ? color3 : '#000',background: color1 ? color1 : '#000' }}>
  <div class="card-body">
  <div className="text-center"> <ColorLensOutlinedIcon className='temp_cardicon' style={{ background:`linear-gradient(296deg, ${color2} 0%, ${color1} 99%)` }} ></ColorLensOutlinedIcon></div>
    <h5 class="card-title text-center my-3">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="temp_btn">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-md-5">
      <div class="card"  style={{ color: color3 ? color3 : '#000',background: color1 ? color1 : '#000' }} >
  <div class="card-body">
  <div className="text-center text-center"><ColorizeIcon className='temp_cardicon'  style={{ background:`linear-gradient(296deg, ${color2} 0%, ${color1} 99%)` }}></ColorizeIcon></div>
    <h5 class="card-title my-3 text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="temp_btn">Go somewhere</a>
  </div>
</div>
      </div>
      </div>
      <div className="row d-flex justify-content-center">
      <div className="col-md-5">
      <div class="card"  style={{ color: color3 ? color3 : '#000',background: color1 ? color1 : '#000' }}>
  <div class="card-body">
  <div className="text-center"><OpacityOutlinedIcon  style={{ background:`linear-gradient(296deg, ${color2} 0%, ${color1} 99%)` }} className='temp_cardicon'></OpacityOutlinedIcon></div>
    <h5 class="card-title text-center my-3">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="temp_btn">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-md-5">
      <div class="card" style={{ color: color3 ? color3 : '#000',background: color1 ? color1 : '#000' }} >
  <div class="card-body">
  <div className="text-center"><PersonOutlineOutlinedIcon className='temp_cardicon'  style={{ background:`linear-gradient(296deg, ${color2} 0%, ${color1} 99%)` }} > className='temp_cardicon'</PersonOutlineOutlinedIcon></div>
    <h5 class="card-title text-center my-3">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="temp_btn">Go somewhere</a>
  </div>
</div>
      </div>
      </div>
      <div className="row mx-auto my-4 d-flex justify-content-center">
      <div className="col-12">
        <h2 className='text-center my-3'>Our Team</h2>
      </div>
     <div className="col-md-4 sm-6 text-center">
          <img src={man} style={{background:color1}}
           alt="noting" className="our_teamimg"/>
           <p className='font-weight-bold'>Ram Moudgill</p>
           <p>Full Stack Web developer</p>
        </div>
        <div className="col-md-4 sm-6 text-center">
          <img src={man} style={{background:color1}}
           alt="nothing" className="our_teamimg"/>
            <p className='font-weight-bold'>Manpreet Singh</p>
            <p>Full Stack Web developer</p>
        </div>
      </div>
      </div>
    </>
  )
}
export default Maintemp
