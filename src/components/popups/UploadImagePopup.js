import React from 'react'
import './uploadImagePopup.css'

const UploadImagePopup = (props) => {
  return (
    <div id="upload-image-popup">
      <div id="image-popup-content-window">
        <h3>Failed To Trim</h3>
        <button id='image-popup-exit-button'onClick={() => {props.setShowImagePopup(false)}}>✖︎</button>
      </div>
    </div>
  )
}

export default UploadImagePopup


