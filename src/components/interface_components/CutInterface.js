import React from 'react'
import './cutInterface.css';

const CutInterface = (props) => {
  const completeCut = () => {
    console.log('cut!!')
  }
  return (
    <div className='cut-interface'>
      {props.cutName}
      <div id='cut-button-div'>
        <button onClick={completeCut} className='complete-cut'>✔︎</button>
      </div>
    </div>
  )
}

export default CutInterface