import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to='/' className='footer__link'>
                  Color Picker
                </Link>
              </p>
              <p>
                <Link to='/Colors' className='footer__link'>
                  Colors
                </Link>
              </p>
              <p>
                <Link to='/Gradients' className='footer__link'>
                  Gradients
                </Link>
              </p>
              <p>
                <Link to='/Palettes' className='footer__link'>
                  Palettes
                </Link>
              </p>
            </div>
            <div className='col-md-2 '>
              <p className=' font-weight-bold footer_subheading'>Page</p>
              <p>
                <Link to='/privacy' className='footer__link'>
                  Blog
                </Link>
              </p>
              <p>
                <Link to='/privacy' className='footer__link'>
                  Info
                </Link>
              </p>
              <p>
                <Link to='/privacy' className='footer__link'>
                  Resource
                </Link>
              </p>
            </div>
            <div className='col-md-2 '>
              <p className='font-weight-bold footer_subheading'>Company</p>
              <p>
                <Link to='/privacy' className='footer__link'>
                  Terms of service
                </Link>
              </p>
              <p>
                <Link to='/privacy' className='footer__link'>
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link to='/privacy' className='footer__link'>
                  Contact
                </Link>
              </p>
            </div>
            <div className='col-md-4'>
              <p className='footer_subheading'>Feedback</p>
              <p> Share your expierence with Million Colors</p>
              <div className='input_div'>
                <i className='far fa-envelope'></i>{' '}
                <input
                  type='text'
                  placeholder='Enter Your Email'
                  className=' input__design'
                ></input>
              </div>
              <Link to='/privacy'>
                <button
                  // type='submit'
                  className=' my_btn mt-3'
                  value='Enter Your Email'
                >
                  Submit
                </button>
              </Link>
            </div>
            <div className='col-12 mt-2'>
              <p className='footer_subheading text-center'>Follow us on</p>
              <div className='icons d-flex align-items-center justify-content-center'>
                <Link
                  to={{ pathname: 'https://www.facebook.com/ram.moudgill/' }}
                  target='_blank'
                >
                  <i className='fab fa-facebook-square s_link'></i>
                </Link>

                <Link
                  to={{ pathname: 'https://twitter.com/Manpree27482859' }}
                  target='_blank'
                >
                  <i className='fab fa-twitter-square s_link'></i>
                </Link>
                <Link
                  to={{
                    pathname:
                      'https://www.linkedin.com/in/manpreet-singh-76aa51193/',
                  }}
                  target='_blank'
                >
                  <i className='fab fa-linkedin-in s_link'></i>
                </Link>

                <Link
                  to={{ pathname: 'https://github.com/Ram-Moudgill' }}
                  target='_blank'
                >
                  <i className='fab fa-github s_link'></i>
                </Link>
                <Link
                  to={{
                    pathname: 'https://www.instagram.com/front_end_world/',
                  }}
                  target='_blank'
                >
                  <i className='fab fa-instagram s_link'></i>
                </Link>
              </div>
            </div>

            <div className='col-12 mt-3'>
              <hr />
              <div className='d-flex justify-content-between text-muted'>
                <p>Copyright &copy; 2020 Million Color. All rights reserved.</p>
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
