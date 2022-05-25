import React, {useEffect, useState} from 'react'
import ExtraTasks from './ExtraTasks';
import './extraTaskWindow.css'

const ExtraTaskWindow = (props) => {
  const [formattedTaskList, setFormattedTaskList] = useState([]);

  const formatTaskList = (arr) => {
    return arr.map(task => {
      return (
        <ExtraTasks
          nickname={task.taskNickname}
        />
      )
    })
  }
  useEffect(() => {
    setFormattedTaskList(formatTaskList(props.taskList))
  }, [])
  // console.log(formattedTaskList)
  return (
    <div id='extra-task-window'>{formattedTaskList}</div>
  )
}

export default ExtraTaskWindow