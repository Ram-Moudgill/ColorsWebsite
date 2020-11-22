import React, { Component } from 'react'
import '../css/Colorpicker.css'
import PickColor from '../Components/PickColor'
export class Colorpicker extends Component {
  render() {
    return (
      <>
        <div className='row mx-0' style={{ marginTop: '140px' }}>
          <PickColor mode={this.props.mode}></PickColor>
        </div>
      </>
    )
  }
}

export default Colorpicker
