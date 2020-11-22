import React from 'react'

const Maintemp = ({ palettefortemp }) => {
  return (
    <div>
      <div
        style={{
          height: '300px',
          width: '300px',
          background: palettefortemp.color1,
        }}
      ></div>
      <div
        style={{
          height: '300px',
          width: '300px',
          background: palettefortemp.color2,
        }}
      ></div>
      <div
        style={{
          height: '300px',
          width: '300px',
          background: palettefortemp.color3,
        }}
      ></div>
      <div
        style={{
          height: '300px',
          width: '300px',
          background: palettefortemp.color4,
        }}
      ></div>
    </div>
  )
}

export default Maintemp
