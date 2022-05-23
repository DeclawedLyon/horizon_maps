import React, { useState, useEffect } from 'react'
import CutInterface from './CutInterface'
import './cutsMenu.css'

export default function CutsMenu(props) {
  const [cuts, setCuts] = useState([])
  useEffect(() => {
    console.log('cutsMenu useEffect has triggered')
    renderCuts(props.cutList)
  }, [props.cutList])

  const renderCuts = (cutArr) => {
    // console.log(cutArr);
    let cutElementArr = cutArr.map((cut, x) => {
      // console.log(cut)
      return (
        <CutInterface 
          key={`--${x}-${cut.locationName}`} 
          cutName={cut.locationName} 
          updateCutDate={props.updateCutDate}
          setShowImagePopup={props.setShowImagePopup}
        />
      )
    });
    setCuts(cutElementArr);
  }
  return (
    <div className='ui-menu'>
      {cuts}
    </div>
  )
}