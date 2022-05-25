import React, { useEffect, useState } from 'react'
import ScheduleTask from './ScheduleTask';
import './scheduleWindow.css'

export default function ScheduleWindow(props) {
  const [formattedTaskList, setFormattedTaskList] = useState([]);

  const formatTaskList = (arr) => {
    return arr.map(task => {
      return (
        <ScheduleTask
          nickname={task.taskNickname}
        />
      )
    })
  }
  useEffect(() => {
    setFormattedTaskList(formatTaskList(props.taskList))
  }, [])
  console.log(formattedTaskList)
  return (
    <div id='schedule-window'>{formattedTaskList}</div>
  )
}
