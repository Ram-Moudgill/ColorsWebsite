import React, { useState } from 'react'
import '../css/Maintemp.css'
import { Link } from 'react-router-dom'
import Avatar from '../Screens/Avatar'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import man from '../images/newimg.png'
import MaintempCard from '../Components/MaintempCard'

const Maintemp = ({ palettefortemp }) => {
  const { color1, color2, color3, color4 } = palettefortemp
  const [text0, setText] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')

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
  const hover = (e) => {
    e.target.style.background = color4
  }
  const defaulthover = (e) => {
    e.target.style.background = color1
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
              background: color1 ? color1 : '#841cf7',
            }}
          >
            <nav
              className='navbar navbar_style w-100'
              style={{
                background: color1 ? color1 : '#841cf7',
                color: color2 ? color2 : '#000',
              }}
            >
              <Link
                className='navbar-brand'
                to='/'
                style={{
                  color: color2 ? color2 : '#000',
                }}
              >
                Million Colors
              </Link>
              <div className='ml-auto'>
                <Link
                  className='navbar-brand '
                  to='/'
                  style={{
                    color: color2 ? color2 : '#000',
                  }}
                >
                  <HomeOutlinedIcon></HomeOutlinedIcon>
                </Link>
                <Link
                  className='navbar-brand '
                  to='/'
                  style={{
                    color: color2 ? color2 : '#000',
                  }}
                >
                  <GroupOutlinedIcon></GroupOutlinedIcon>
                </Link>
              </div>
            </nav>
            <div className='text-center'>
              <h1
                style={{
                  color: color2 ? color2 : '#000',
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
                  color: color2 ? color2 : '#000',
                  opacity: '0.8',
                  fontSize: '1.2rem',
                }}
              >
                Get largest collection of Colors,Gradients and Palettes on one
                place
              </p>
              <Link
                to='/'
                className='temp_btn mt-2'
                style={{
                  color: color3 ? color3 : '#000',
                  background: color2 ? color2 : '#fff',
                }}
              >
                Get Started
              </Link>
            </div>
            <div
              className='custom-shape-divider-bottom-1606045216'
              style={{ background: color1 ? color1 : '#841cf7' }}
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
        <h3
          className=' text-center mt-3 mb-4'
          style={{
            color: color3 ? color3 : '#000',
            zIndex: '100',
          }}
        >
          This Palette
        </h3>
        <p
          className='text-center'
          style={{
            color: color3 ? color3 : '#000',
          }}
        >
          Copy color by simply clicking on card.
        </p>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-5 p-3'>
            <CopyToClipboard text={color1 ? color1 : '#F47C5A'}>
              <div
                className='card clickable__card'
                onClick={CopytoClipBoard}
                style={{
                  color: color1 ? color1 : '#fff',
                  background: color1 ? color1 : '#841cf7',
                  boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                }}
              >
                <p className='text-center card_para_style'>
                  <strong>Color 1</strong>
                  <br />
                  Header buttons svg Cardicons Image
                </p>
                <p className='text-center font-weight-bolder card_para_style'>
                  {' '}
                  {color1 ? color1 : '#841cf7'}
                </p>
                <span className='copied0'>{text0}</span>
              </div>
            </CopyToClipboard>
          </div>

          <div className='col-md-5 p-3'>
            <CopyToClipboard text={color2 ? color2 : '#503F75'}>
              <div
                className='card clickable__card'
                onClick={CopytoClipBoard1}
                style={{
                  color: color2 ? color2 : '#fff',
                  background: color2 ? color2 : '#fff',
                  boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                }}
              >
                <p className='text-center card_para_style'>
                  <strong>Color 2</strong>
                  <br />
                  Body Buttons
                </p>
                <p className='text-center font-weight-bolder card_para_style'>
                  {' '}
                  {color2 ? color2 : '#fff'}
                </p>
                <span className='copied1'>{text1}</span>
              </div>
            </CopyToClipboard>
          </div>

          <div className='col-md-5 p-3'>
            <CopyToClipboard text={color3 ? color3 : '#265336'}>
              <div
                className='card clickable__card'
                onClick={CopytoClipBoard2}
                style={{
                  color: color3 ? color3 : '#fff',
                  background: color3 ? color3 : '#000',
                  boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                }}
              >
                <p className='text-center card_para_style'>
                  <strong>Color 3</strong>
                  <br />
                  Text
                </p>
                <p className='text-center font-weight-bolder card_para_style'>
                  {' '}
                  {color3 ? color3 : '#000'}
                </p>
                <span className='copied2'>{text2}</span>
              </div>
            </CopyToClipboard>
          </div>
          <div className='col-md-5 p-3'>
            <CopyToClipboard text={color4 ? color4 : '#252339'}>
              <div
                className='card clickable__card'
                onClick={CopytoClipBoard3}
                style={{
                  color: color4 ? color4 : '#fff',
                  background: color4 ? color4 : '#fff',
                  boxShadow: 'rgb(0 0 0 / 31%) 0 0 0 1px',
                }}
              >
                <p className='text-center card_para_style'>
                  <strong>Color 4</strong>
                  <br />
                  Hover Effect Image
                </p>
                <p className='text-center font-weight-bolder card_para_style'>
                  {' '}
                  {color4 ? color4 : '#fff'}
                </p>
                <span className='copied3'>{text3}</span>
              </div>
            </CopyToClipboard>
          </div>
        </div>

        <h3
          className='text-center mt-5 mb-4'
          style={{
            color: color3 ? color3 : '#000',
            fontWeight: '700',
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
                fontWeight: 700,
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
              onMouseOver={hover}
              onMouseLeave={defaulthover}
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
              onMouseOver={hover}
              onMouseLeave={defaulthover}
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
