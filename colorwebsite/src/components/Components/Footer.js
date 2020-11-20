import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'
const Footer = () => {
  return (
    <>
      <div className='main_row row my-4 py-5'>
        <div className='col-md-11 mx-auto'>
          <div className='row d-flex  justify-content-between'>
            <div className='col-md-2'>
              <p className='font-weight-bold footer_subheading'>Website</p>
              <p>
                <NavLink to='/'>Color Picker</NavLink>
              </p>
              <p>
                <NavLink to='/Colors'>Colors</NavLink>
              </p>
              <p>
                <NavLink to='/Gradients'>Gradients</NavLink>
              </p>
              <p>
                <NavLink to='/TryColors'>Try Colors</NavLink>
              </p>
            </div>
            <div className='col-md-2 '>
              <p className=' font-weight-bold footer_subheading'>Page</p>
              <p>
                <NavLink to='/'>Blog</NavLink>
              </p>
              <p>
                <NavLink to='/'>Info</NavLink>
              </p>
              <p>
                <NavLink to='/'>Resource</NavLink>
              </p>
            </div>
            <div className='col-md-2 '>
              <p className='font-weight-bold footer_subheading'>Company</p>
              <p>
                <NavLink to='/'>Terms of service</NavLink>
              </p>
              <p>
                <NavLink to='/'>Privacy Policy</NavLink>
              </p>
              <p>
                <NavLink to='/'>Contact</NavLink>
              </p>
            </div>
            <div className='col-md-4'>
              <p className='footer_subheading'>Newsletter</p>
              <p>
                {' '}
                Subscribe to our Newsletter to get your weekly dose of
                news,updates,tips and special offers
              </p>
              <div className='input_div'>
                <i className='far fa-envelope'></i>{' '}
                <input
                  type='text'
                  placeholder='Enter Your Email'
                  className=' input__design'
                ></input>
              </div>

              <button
                type='submit'
                className=' my_btn mt-3'
                value='Enter Your Email'
              >
                Submit
              </button>
            </div>
            <div className='col-12 mt-2'>
              <p className='footer_subheading text-center'>Follow us on</p>
              <div className='icons d-flex align-items-center justify-content-center'>
                {/* <IconButton>
                  <FacebookIcon className='s_link_m' />
                </IconButton>
                <IconButton>
                  <InstagramIcon className='s_link_m' />
                </IconButton>
                <IconButton>
                  <GitHubIcon className='s_link_m' />
                </IconButton>
                <IconButton>
                  <TwitterIcon className='s_link_m' />
                </IconButton> */}

                <i className='fab fa-facebook-square s_link'></i>

                <i className='fab fa-twitter-square s_link'></i>
                <i className='fab fa-linkedin-in s_link'></i>
                <i className='fab fa-github s_link'></i>
                <i className='fab fa-slack s_link'></i>
                <i className='fab fa-instagram s_link'></i>
              </div>
            </div>

            <div className='col-12 mt-3'>
              <hr />
              <div className='d-flex justify-content-between text-muted'>
                <p> Privacy Policy Terms and Conditions </p>
                <p>Million Color</p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
