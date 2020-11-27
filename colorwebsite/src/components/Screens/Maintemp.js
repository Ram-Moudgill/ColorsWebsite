import React, { useState } from 'react'
import '../css/Maintemp.css'
import { Link } from 'react-router-dom'
import Avatar from '../Screens/Avatar'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { IconButton } from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import man from '../images/newimg.png'
import MaintempCard from '../Components/MaintempCard'

const Maintemp = ({ palettefortemp, sidebarstatus }) => {
  const { color1, color2, color3, color4 } = palettefortemp
  const [text0, setText] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  sidebarstatus()

  function CopytoClipBoard() {
    document.querySelector('.copied0').classList.add('copied')
    setText('Copied!')
    setTimeout(() => {
      setText('')
      document.querySelector('.copied0').classList.remove('copied')
    }, 700)
  }
  function CopytoClipBoard1() {
    document.querySelector('.copied1').classList.add('copied')
    setText1('Copied!')
    setTimeout(() => {
      setText1('')
      document.querySelector('.copied1').classList.remove('copied')
    }, 700)
  }
  function CopytoClipBoard2() {
    document.querySelector('.copied2').classList.add('copied')
    setText2('Copied!')
    setTimeout(() => {
      setText2('')
      document.querySelector('.copied2').classList.remove('copied')
    }, 700)
  }
  function CopytoClipBoard3() {
    document.querySelector('.copied3').classList.add('copied')
    setText3('Copied!')
    setTimeout(() => {
      setText3('')
      document.querySelector('.copied3').classList.remove('copied')
    }, 700)
  }
  return (
    <>
      <div
        className='container-fluid p-0 m-0'
        style={{
          background: color2 ? color2 : '#fff',
          position: 'sticky',
        }}
      >
        <div className='row p-0 m-0'>
          <div
            className=' col-12 m-0 p-0'
            style={{
              background: color1 ? color1 : '#ff5757',
            }}
          >
            <nav
              className='navbar navbar_style w-100'
              style={{
                background: color1 ? color1 : '#ff5757',
                color: color3 ? color3 : '#000',
              }}
            >
              <IconButton onClick={sidebarstatus}>
                {' '}
                <i
                  className='fas fa-bars'
                  aria-hidden='true'
                  style={{
                    color: color3 ? color3 : '#000',
                  }}
                ></i>
              </IconButton>

              <Link
                className='navbar-brand'
                to='/'
                style={{
                  color: color3 ? color3 : '#000',
                }}
              >
                Million Colors
              </Link>
              <div className='ml-auto'>
                <Link
                  className='navbar-brand '
                  to='/'
                  style={{
                    color: color3 ? color3 : '#000',
                  }}
                >
                  <HomeOutlinedIcon></HomeOutlinedIcon>
                </Link>
                <Link
                  className='navbar-brand '
                  to='/'
                  style={{
                    color: color3 ? color3 : '#000',
                  }}
                >
                  <GroupOutlinedIcon></GroupOutlinedIcon>
                </Link>
              </div>
            </nav>
            <div className='text-center'>
              <h1
                style={{
                  color: color3 ? color3 : '#000',
                  zIndex: '100',
                  marginTop: 75,
                  fontSize: '1.8rem',
                  lineHeight: ' 35.3px',
                  wordSpacing: '3px',
                }}
              >
                We Provide the Best Color Schemes <br></br>
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
              className='custom-shape-divider-bottom-1606045216'
              style={{ background: color1 ? color1 : '#ff5757' }}
            >
              <svg
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1200 120'
                preserveAspectRatio='none'
              >
                <path
                  d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                  className='shape-fill'
                  fill={color2 ? color2 : '#fff'}
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <Avatar color1={color1} />
        <div className='row p-0 m-0'>
          <div className='col-md-12 copy_btn'>
            <h3
              className=' text-left'
              style={{
                color: color3 ? color3 : '#000',
                zIndex: '100',
              }}
            >
              This Palette
            </h3>
            <p
              style={{
                color: color3 ? color3 : '#000',
                lineHeight: 1,
              }}
            >
              Click to copy the hex code to your clipboard
            </p>
            <h5 className='pt-2' style={{ color: color3 ? color3 : '#000' }}>
              Elements
            </h5>
            <div className='main_btn'>
              <CopyToClipboard text={color1 ? color1 : '#F47C5A'}>
                <div
                  onClick={CopytoClipBoard}
                  className='background'
                  style={{
                    color: color1 ? color1 : '#fff',
                    background: color1 ? color1 : '#F47C5A',
                    boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                  }}
                >
                  <span className='text-white'>
                    <p>
                      <strong>Background</strong>
                    </p>
                    {color1 ? color1 : '#F47C5A'}
                  </span>

                  <span className='copied0'>{text0}</span>
                </div>
              </CopyToClipboard>

              <CopyToClipboard text={color2 ? color2 : '#503F75'}>
                <div
                  onClick={CopytoClipBoard1}
                  className='Heading'
                  style={{
                    color: color2 ? color2 : '#fff',
                    background: color2 ? color2 : '#503F75',
                    boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                  }}
                >
                  <span className='text-white'>
                    <p>
                      <strong>Heading</strong>
                    </p>
                    {color2 ? color2 : '#503F75'}
                  </span>
                  <span className='copied1'>{text1}</span>
                </div>
              </CopyToClipboard>

              <CopyToClipboard text={color3 ? color3 : '#265336'}>
                <div
                  onClick={CopytoClipBoard2}
                  className='Button'
                  style={{
                    color: color3 ? color3 : '#fff',
                    background: color3 ? color3 : '#265336',
                    boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                  }}
                >
                  <span className='text-white'>
                    <p>
                      <strong>Button</strong>
                    </p>
                    {color3 ? color3 : '#265336'}
                  </span>
                  <span className='copied2'>{text2}</span>
                </div>
              </CopyToClipboard>

              <CopyToClipboard text={color4 ? color4 : '#252339'}>
                <div
                  onClick={CopytoClipBoard3}
                  className='Paragraph'
                  style={{
                    color: color4 ? color4 : '#fff',
                    background: color4 ? color4 : '#252339',
                    boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                  }}
                >
                  <span className='text-white'>
                    <p>
                      <strong>Paragraph</strong>
                    </p>
                    {color4 ? color4 : '#252339'}
                  </span>
                  <span className='copied3'>{text3}</span>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <h3
          className='text-center my-5'
          style={{
            color: color3 ? color3 : '#000',
            fontWeight: '900',
          }}
        >
          Services
        </h3>
        <div className='row d-flex justify-content-center p-5 p-md-0'>
          <MaintempCard palettefortemp={palettefortemp} />
        </div>

        <div className='row mx-auto my-4 d-flex justify-content-center'>
          <div className='col-12'>
            <h3
              className='text-center my-5'
              style={{
                color: color3 ? color3 : '#000',
                fontWeight: 900,
                lineHeight: 0,
              }}
            >
              Our Team
            </h3>
          </div>
          <div className='col-md-4 sm-6 text-center'>
            <img
              src={man}
              style={{ background: color1 }}
              alt='noting'
              className='our_teamimg'
            />
            <p
              className='font-weight-bold'
              style={{
                color: color3 ? color3 : '#000',
              }}
            >
              Ram Moudgill
            </p>
            <p
              style={{
                color: color3 ? color3 : '#000',
              }}
            >
              Full Stack Web developer
            </p>
          </div>
          <div className='col-md-4 sm-6 text-center'>
            <img
              src={man}
              style={{ background: color1 }}
              alt='nothing'
              className='our_teamimg'
            />
            <p
              className='font-weight-bold'
              style={{
                color: color3 ? color3 : '#000',
              }}
            >
              Manpreet Singh
            </p>
            <p
              style={{
                color: color3 ? color3 : '#000',
              }}
            >
              Full Stack Web developer
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Maintemp
