import React, { useState } from 'react'
import './scheduleTimeslot.css'

const ScheduleTimeslot = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className='timeslot-container'>
      <div className='timeslot-header'>
        <div className='timeslot-hour-start-time'>{props.startTime}</div>
        <div className='timeslot-hour-end-time'>{props.endTime}</div>
      </div>
      <div className='timeslot-details'>
        <div className='timeslot-title'>{props.plan}</div>
        {showDescription && <div className='timeslot-description'>{props.description ? props.description : ''}</div>}
      </div>
    </div>
  )
}

export default ScheduleTimeslot