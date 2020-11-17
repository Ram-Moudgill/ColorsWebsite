import React from 'react'
import '../css/Header.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
const header = ({ subTitle, mainTitle, secondTitle }) => {
  return (
    <>
      <div className='header alert alert-warning alert-dismissible fade show'>
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <CloseIcon className='text-white'></CloseIcon>
        </button>
        <p className='text-center text--white'>{subTitle} </p>
        <h3 className='text-center text-white font-weight-bolder'>
          {mainTitle}
        </h3>
        <p className='text-center text--white'>{secondTitle} </p>
        <small className='text-center w-100 d-block text-white'>
          Follow Us On
        </small>
        <p className='text-white text-center'>
          <IconButton className='mx-2 text-white'>
            <FacebookIcon />
          </IconButton>
          <IconButton className='mx-2 text-white'>
            <InstagramIcon />
          </IconButton>
          <IconButton className='mx-2 text-white'>
            <TwitterIcon />
          </IconButton>
          <IconButton className='mx-2 text-white'>
            <GitHubIcon />
          </IconButton>
        </p>
      </div>
    </>
  )
}

export default header
