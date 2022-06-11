import React from 'react'
import './extraTasks.css'

const ExtraTasks = (props) => {
  function completeTask(task) {
    console.log('test')
    alert('test')
  }
  return (
    <div className='scheduled-task'>
      {props.nickname}
      <button className='complete-extra-task' onClick={() => completeTask(props.task)}>Complete</button>
    </div>
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