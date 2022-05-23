import React from 'react'
import './uploadImagePopup.css'

const UploadImagePopup = (props) => {
  return (
    <div id="upload-image-popup">
      <div id="popup-content-window">
        <h3>Failed To Trim</h3>
        <button onClick={() => {props.setShowImagePopup(false)}}>✖︎</button>
      </div>
    </div>
  )
}

export default UploadImagePopup


