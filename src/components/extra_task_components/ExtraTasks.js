import React from 'react'
import './extraTasks.css'

const ExtraTasks = (props) => {
  return (
    <div className='scheduled-task'>word: {props.nickname}</div>
  )
}
// taskNickname: 'Clean Roads',
//     taskLocation: 'Government House',
//     taskDescription: 'Shovel and the blow-dry the leaves out of the gutters',
//     taskPriority: 1,
//     dateSet: new Date('May, 20, 2022, 12:00:00'),
//     dateComplete: new Date('May, 23, 2022, 12:00:00'),
//     taskIsComplete: true,

export default ExtraTasks