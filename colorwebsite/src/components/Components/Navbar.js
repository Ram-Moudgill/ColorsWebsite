import React, { Component, useState } from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import IconButton from '@material-ui/core/IconButton'
import Logo from '../images/Logo.png'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'

class Navbar extends Component {
  state = { newmode: true }
  change = async () => {
    if (this.state.newmode === true) {
      await this.setState({ newmode: false })
      this.props.changeMode(this.state.newmode)
      document.body.style.background = '#000'
      document.body.style.color = '#fff'
    } else {
      await this.setState({ newmode: true })
      this.props.changeMode(this.state.newmode)
      document.body.style.background = '#fff'
      document.body.style.color = '#000'
    }
  }
  render() {
    return (
      <div
        className='row nav__row p-0 m-0'
        style={{ background: this.props.mode ? '#fff' : '#333333' }}
      >
        <div className=' col-12 mx-auto'>
          <nav className='navbar navbar-expand-lg '>
            <img src={Logo} className='logo__img' alt='Logo' />
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <IconButton className='icon__button'>
                <MenuRoundedIcon
                  className='ham__icon'
                  style={{ color: this.props.mode ? 'gray' : '#fff' }}
                ></MenuRoundedIcon>
              </IconButton>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink
                    style={{ color: this.props.mode ? '#000' : '#fff' }}
                    exact
                    className='nav-link'
                    activeClassName='active'
                    to='/'
                  >
                    Color Picker
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    style={{ color: this.props.mode ? '#000' : '#fff' }}
                    exact
                    className='nav-link'
                    activeClassName='active'
                    to='/colors'
                  >
                    Colors
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    style={{ color: this.props.mode ? '#000' : '#fff' }}
                    exact
                    className='nav-link'
                    activeClassName='active'
                    to='/gradients'
                  >
                    Gradients
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    style={{ color: this.props.mode ? '#000' : '#fff' }}
                    exact
                    className='nav-link'
                    activeClassName='active'
                    to='/palettes'
                  >
                    Palettes
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <IconButton onClick={this.change}>
                    {this.props.mode ? (
                      <Brightness4Icon />
                    ) : (
                      <Brightness7Icon style={{ color: '#fff' }} />
                    )}
                  </IconButton>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
