import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/About.css'
const AboutColors = () => {
  return (
    <Fragment>
      <div className='row my-5'>
        <div className='col-10 mx-auto p-4'>
          <div className='about_colors'>
            <h5 className='subheading text-center'>About this Website</h5>
            <h5>Introduction</h5>
            <p>
              Color is an important element in design, data visualization, and
              art.
            </p>
            <h5 className='mt-4'>What is Million Colors?</h5>
            <p className='about_colors_p'>
              Million Colors is a website that provides You the Best Color
              Picker with opacity, Colors, Latest Gradients, and Best Color
              Palette.You can pick colors for your projects in Rgb,Hex and Hsl
              format.
            </p>
            <p>Find many colors combinations to copy paste in one click.</p>

            <h5 className='mt-4'>Who is it for?</h5>
            <p className='about_colors_p'>
              Million Colors serves thousands of color schemes for many
              different design and art purposes.The color palettes are being
              used by graphic designers, artists, illustrators, web developers,
              fashion designers, marketeers, interior designers, and more.
            </p>

            <h5 className='mt-4'>Who founded Million Colors?</h5>
            <p className='about_colors_p'>
              Million Colors founded by &nbsp;
              <a
                href='https://ram-moudgill.github.io/MyPortfolio/'
                className='same'
              >
                &nbsp;Manpreet Singh
              </a>{' '}
              and
              <a href='https://manpreetchoudhary.github.io/' className='same'>
                &nbsp;Ram Moudgill
              </a>
              &nbsp;,designer and full stack web developer
            </p>

            <h5 className='mt-4'>Contact us~</h5>
            <p className='about_colors_p'>
              If you have any quieries, suggestions or other requests feel free
              to contact us! <br></br>We are always happy to hear from you!
            </p>
            <a href='#'>
              <span>Email:&nbsp;</span>example@gmail.com
            </a>
            <br />
            <a href='#'>
              <span>Instagram:&nbsp;</span>https://www.instagram.com
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AboutColors
