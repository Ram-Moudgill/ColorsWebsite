import React from 'react'
import '../css/PickColor.css'
import { SketchPicker } from 'react-color'

class PickColor extends React.Component {
  state = {
    // displayColorPicker: false,
    hex: '#E0172A',
    color: {
      r: '224',
      g: '23',
      b: '42',
      a: '1 ',
    },
    hsla: '354,90%,48%,1',
  }

  handleChange = (color) => {
    this.setState({ color: color.rgb })
    const { r, g, b, a } = this.state.color
    this.setState({ hex: this.RGBAToHexA(r, g, b, a) })
    this.setState({ hsla: this.hexToHSL(this.state.hex) })
  }
  RGBAToHexA = (r, g, b, a) => {
    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)
    a = Math.round(a * 255).toString(16)

    if (r.length === 1) r = '0' + r
    if (g.length === 1) g = '0' + g
    if (b.length === 1) b = '0' + b
    if (a.length === 1) a = '0' + a

    return '#' + r + g + b + a
  }
  hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0,
      a = 1

    if (H.length === 5) {
      r = '0x' + H[1] + H[1]
      g = '0x' + H[2] + H[2]
      b = '0x' + H[3] + H[3]
      a = '0x' + H[4] + H[4]
    } else if (H.length === 9) {
      r = '0x' + H[1] + H[2]
      g = '0x' + H[3] + H[4]
      b = '0x' + H[5] + H[6]
      a = '0x' + H[7] + H[8]
    }
    // Then to HSL
    r /= 255
    g /= 255
    b /= 255
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0

    if (delta === 0) h = 0
    else if (cmax === r) h = ((g - b) / delta) % 6
    else if (cmax === g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    if (h < 0) h += 360

    l = (cmax + cmin) / 2
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
    a = (a / 255).toFixed(3)
    return (
      '' +
      h +
      ',' +
      Math.round(s) +
      '%,' +
      Math.round(l) +
      '%,' +
      Math.round(a) +
      ''
    )
  }

  render() {
    const background = `rgb(${this.state.color.r},${this.state.color.g},${this.state.color.b},${this.state.color.a})`
    return (
      <>
        <div className='col-md-5 mb-5 mb-md-0 offset-md-3 offset-0'>
          <div>
            <div />
            <SketchPicker
              className='sketch__picker'
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='col'>
          <div className='main-color'>
            <div
              className='colored__div'
              style={{ background: background }}
            ></div>
            <div className='color-picker'>
              <div className='HEXA'>
                <h5 className='mb-0 '>
                  <strong>Hex</strong>
                </h5>
                {this.state.hex}
              </div>
              <div className='RGBA'>
                <h5 className='mb-0'>
                  <strong>Rgba</strong>
                </h5>
                <span>
                  {this.state.color.r},{this.state.color.g},{this.state.color.b}
                  ,{this.state.color.a}
                </span>
              </div>

              <div className='HSL'>
                <h5 className='mb-0'>
                  <strong>Hsla</strong>
                </h5>
                {this.state.hsla}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PickColor
