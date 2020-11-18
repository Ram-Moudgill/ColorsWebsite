import React, { useState, useEffect } from 'react'
import Gradient from '../Components/Gradient'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
import Loading from '../Components/Loading'
const Gradients = () => {
  const [bgGradientColl, setBgGradientColl] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(async () => {
    setLoading(true)
    const res = await axios.get('/api/gradients')
    console.log(res.data.gradients)
    setBgGradientColl(res.data.gradients)
    setLoading(false)
  }, [])
  if (loading) {
    return <Loading />
  } else {
    return (
      <>
        <div className='header alert alert-warning alert-dismissible fade show'>
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
          >
            <IconButton>
              <CloseIcon className='text-white'></CloseIcon>
            </IconButton>
          </button>
          <p className='text-center text--white'>
            Looking For the Best Colors For Your Project?{' '}
          </p>
          <h3 className='text-center text-white font-weight-bolder'>
            Million Colors
          </h3>
          <p className='text-center text--white'>
            Best Color Resourse for your Project
          </p>
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
        <div className='row mt-4 p-0 mx-0'>
          <div className='col-md-11 mx-auto'>
            <h2>Gradient Palette</h2>
            <div className='row'>
              {bgGradientColl.map((data) => (
                <div className='col-lg-3 col-md-6' key={data._id}>
                  <Gradient bg={data}></Gradient>
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
