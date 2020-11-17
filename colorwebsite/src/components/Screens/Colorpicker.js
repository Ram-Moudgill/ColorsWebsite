import React, { Component } from 'react'
import '../css/Colorpicker.css'
import AboutColors from '../Components/AboutColors'
import PickColor from '../Components/PickColor'
export class Colorpicker extends Component {
  render() {
    return (
      <>
        <div className='row m-5'>
          <PickColor></PickColor>
          <AboutColors></AboutColors>
        </div>
      </>
    )
  }
}

export default Colorpicker
