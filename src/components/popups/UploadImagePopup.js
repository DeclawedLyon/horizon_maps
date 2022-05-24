import React from 'react'
import './uploadImagePopup.css'

const UploadImagePopup = (props) => {
  return (
    <div id="upload-image-popup">
      <div id="image-popup-content-window">
        <h3>Failed To Trim</h3>
        <button id='image-popup-exit-button'onClick={() => {props.setShowImagePopup(false)}}>✖︎</button>
        <p>Idk if this popup should... 
          <ul style={{textAlign: 'left'}}>
            <li>1) set an alert on the specified cut/trim,</li>  
            <li>2) send an automated text/email to a specified company member that the cut/trim has failed,</li>
            <li>3) set a reminder to cut later in week</li>
            <li>4) ask for user to upload picture of failed cut with their phones camera</li>
          </ul>  
        </p>
      </div>
    </div>
  )
}

export default UploadImagePopup


