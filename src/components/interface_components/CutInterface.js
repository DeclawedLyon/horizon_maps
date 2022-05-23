import React from 'react'
import './cutInterface.css';

const CutInterface = (props) => {
  const completeCut = () => {
    console.log('cut!!')
  }
  return (
    <div className='cut-interface'>
      {props.cutName}
      <div className='cut-button-div'>
        <button onClick={() => props.updateCutDate(props.cutName)} className='complete-cut'>✔︎</button>
        <button onClick={() => props.setShowImagePopup(true)} className='failed-cut'>✘</button>
      </div>
    </div>
  )
}

export default CutInterface