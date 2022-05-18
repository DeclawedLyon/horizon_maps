import React, { useState, useEffect } from 'react'
import CutInterface from './CutInterface'

export default function CutsMenu(props) {
  const [cuts, setCuts] = useState([])
  useEffect(() => {
    renderCuts(props.cutList)
  }, [props.cutList])

  const renderCuts = (cutArr) => {
    console.log(cutArr);
    let cutElementArr = cutArr.map(cut => {
      console.log(cut)
      return (
        <CutInterface cutName={cut.locationName} />
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