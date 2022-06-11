import React from 'react'
import './bottomNav.css'

const BottomNav = (props) => {

  return (
    <div id='bottom-nav-menu'>
      <div className='bottom-nav-option' onClick={() => {props.setMode("MAP")}}>Maps</div>
      <div className='bottom-nav-option' onClick={() => {props.setMode('SCHEDULE')}}>Schedule</div>
      <div className='bottom-nav-option'>Cut History?</div>
      <div className='bottom-nav-option' style={{fontSize: '0.5em'}}>Set Schedules? (Management only?)</div>
      <div className='bottom-nav-option' onClick={() => {props.setMode("EXTRA_TASKS")}}>Extra Tasks</div>
      <div className='bottom-nav-option' onClick={() => {props.setMode("BONUS_WORK")}}>Bonus Work</div>
    </div>
  )
}

export default BottomNav