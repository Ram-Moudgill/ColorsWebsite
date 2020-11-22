import React, { Component } from 'react'
import '../css/Palettes.css'
export class Palettediv extends Component {
  state = {
    color1: '',
    color2: '',
    color3: '',
    color4: '',
  }
  clicker = () => {
    const { color1, color2, color3, color4 } = this.props.item
    this.setState({
      color1: color1,
      color2: color2,
      color3: color3,
      color4: color4,
    })
    this.props.temppalette(color1, color2, color3, color4)
    // console.log(this.state)
  }
  render() {
    return (
      <>
        <div className='palette_div' onClick={this.clicker}>
          <input
            className='palette_div_item'
            style={{ background: this.props.item.color1 }}
          ></input>
          <input
            className='palette_div_item'
            style={{ background: this.props.item.color2 }}
          ></input>
          <div
            className='palette_div_item'
            style={{ background: this.props.item.color3 }}
          ></div>
          <div
            className='palette_div_item'
            style={{ background: this.props.item.color4 }}
          ></div>
        </div>
      </>
    )
  }
}

export default Palettediv
