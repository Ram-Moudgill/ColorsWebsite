import React from 'react'
import { Link } from 'react-router-dom'
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ColorizeIcon from '@material-ui/icons/Colorize'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined'
import PalettesData from '../../components/PalettesData'
import IconButton from '@material-ui/core/IconButton'
const MaintempCard = ({ palettefortemp }) => {
  const { color1, color3 } = palettefortemp

  function getAvataricon(PalettesData) {
    switch (PalettesData) {
      case 'a':
        return <OpacityOutlinedIcon />
      case 'b':
        return <PersonOutlineOutlinedIcon />
      case 'c':
        return <ColorizeIcon />
      case 'd':
        return <ColorLensOutlinedIcon />
      default:
        return <ColorLensOutlinedIcon />
    }
  }
  return (
    <>
      {PalettesData.map((val) => (
        <div key={val._id} className='col-md-5'>
          <div class='card my-2 h-auto'>
            <div
              class='card-body'
              style={{
                color: color3 ? color3 : '#000',
                background: color1 ? color1 : '#fff',
              }}
            >
              <div className='text-center'>
                <IconButton className='temp_cardicon'>
                  {/* ///style pending */}
                  {getAvataricon(val.avatarIcon)}
                </IconButton>
              </div>
              <h5 class='card-title text-center my-3'>{val.cardTitle}</h5>
              <p class='card-text'>{val.cardText}</p>
              <Link
                to='#'
                class='temp_btn btn'
                style={{ background: color1 ? color1 : '#fff' }}
              >
                {val.btnText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default MaintempCard
