import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const AboutColors = () => {
  return (
    <Fragment>
      <div className='row my-5'>
        <div className='col-10 mx-auto'>
          <div className='about_colors'>
            <p className='subheading'>About Million Colors</p>
            <p className='about_colors_p'>
              Million Colors is a website that provides You the Best Color
              Picker with opacity,Colors,Latest Gradients,and Best Color
              Palette.You can pick colors for your projects in Rgb,Hex and Hsl
              format. Below is the complete guide about how you can use this
              website.
            </p>
            <Link to='/colors' className='my_btn'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AboutColors
