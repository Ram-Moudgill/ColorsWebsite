import React, { useState, useEffect } from 'react'
import '../css/Color.css'
import IconButton from '@material-ui/core/IconButton'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import LaunchIcon from '@material-ui/icons/Fullscreen'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from 'axios'

const Color = ({ co }) => {
  const [text, setText] = useState('')
  function CopytoClipBoard() {
    setText('Copied!')
    setTimeout(() => {
      setText('')
    }, 700)
  }

  const [Show, setShow] = useState(false)
  const showModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }

  const [colors, setColors] = useState([])
  useEffect(() => {
    const fetchColors = async () => {
      const res = await axios.get('/api/colors')
      let response = res.data.colors
      for (let key in response) {
        let ew = response[key].color
        setColors(ew)
      }
    }
    fetchColors()
  }, [])
  const colorStyle = {
    background: colors,
    boxShadow: `0 20px 10px -15px ${colors}`,
  }

  return (
    <>
      <div className='card my-4' style={colorStyle}>
        <div className='car'>
          <CopyToClipboard text={colorStyle}>
            <IconButton onClick={CopytoClipBoard}>
              <FileCopyIcon style={{ color: 'rgb(31, 38, 103)' }} />
              <span style={{ fontSize: 14 }}>{text}</span>
            </IconButton>
          </CopyToClipboard>
          <IconButton className='text-right'>
            <LaunchIcon
              style={{ color: 'rgb(31, 38, 103)' }}
              onClick={showModal}
            ></LaunchIcon>
          </IconButton>
        </div>
      </div>
      {Show && (
        <div className='color_modal' style={{ background: co.color }}>
          <button className='btn close' onClick={closeModal}>
            <i className='fa fa-times'></i>
          </button>
        </div>
      )}
    </>
  )
}

export default Color
