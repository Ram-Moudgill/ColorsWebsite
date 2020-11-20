import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
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
              <FileCopyIcon className='file__copyicon' />
              <span style={{ fontSize: 14 }}>{text}</span>
            </IconButton>
          </CopyToClipboard>
          <IconButton className='text-right' onClick={showModal}>
            <i className='fas fa-expand-alt'></i>
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
