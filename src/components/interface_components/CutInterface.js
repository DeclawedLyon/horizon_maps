import React from 'react'
import './cutInterface.css';
import mowIcon from '../../images/lawn_mower.png'
import alert from '../../images/alert.png'

const CutInterface = (props) => {
  const completeCut = () => {
    // console.log('cut!!')
  }
  return (
    <div className='cut-interface'>
      <h2>{props.cutName}</h2>
      <div className='cut-button-div'>
        <button onClick={() => props.updateCutDate(props.cutName)} className='complete-cut'><img className='cut-png' src={mowIcon} alt='trim icon'></img></button>
        <button onClick={() => props.updateTrimDate(props.cutName)} className='complete-trim'><div className='png-container'><img className='cut-png' src='https://cdn1.iconfinder.com/data/icons/elasto-gardening-tools-and-machinery/26/14-GARDEN-TOOLS-READY_grass-trimmer-512.png' alt='trim icon'></img></div></button>
        <button onClick={() => props.setShowImagePopup(true)} className='failed-cut'><img className='cut-png' src={alert} alt='alert icon'></img></button>
      </div>
    </div>
  )
}

export default CutInterface