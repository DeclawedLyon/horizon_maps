import React from 'react'
import './bottomNav.css'

const BottomNav = (props) => {

  return (
    <div id='bottom-nav-menu'>
      <div className='bottom-nav-option'>Maps</div>
      <div className='bottom-nav-option'>Schedule</div>
      <div className='bottom-nav-option'>Cut History?</div>
      <div className='bottom-nav-option' style={{fontSize: '0.5em'}}>Set Schedules? (Management only?)</div>
      <div className='bottom-nav-option'>Extra Tasks?</div>
      <div className='bottom-nav-option'>Extra Tasks?</div>
    </div>
  )
}

export default BottomNav