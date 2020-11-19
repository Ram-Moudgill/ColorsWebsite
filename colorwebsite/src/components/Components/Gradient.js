import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import LaunchIcon from '@material-ui/icons/Fullscreen'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Gradient = ({ bg }) => {
  const [text, setText] = useState('')
  const [Show, setShow] = useState(false)
  const showModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }

  function CopytoClipBoard() {
    setText('Copied!')
    setTimeout(() => {
      setText('')
    }, 700)
  }
  return (
    <>
      <div
        className='card my-4'
        data-target={`#${bg._id}`}
        style={{ background: bg.bg }}
      >
        <div className='car'>
          <CopyToClipboard text={bg.bg}>
            <IconButton onClick={CopytoClipBoard}>
              <FileCopyIcon style={{ color: 'rgb(31, 38, 103)' }} />
              <span style={{ fontSize: 14 }}>{text}</span>
            </IconButton>
          </CopyToClipboard>
          <IconButton className='text-right' onClick={showModal}>
            <LaunchIcon style={{ color: 'rgb(31, 38, 103)' }}></LaunchIcon>
          </IconButton>
        </div>
      </div>
      {Show && (
        <div className='color_modal' style={{ background: bg.bg }}>
          <button className='btn close' onClick={closeModal}>
            <i className='fa fa-times'></i>
          </button>
        </div>
      )}
    </>
  )
}

export default Gradient
