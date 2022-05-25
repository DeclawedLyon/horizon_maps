import React, { useEffect, useState } from 'react'
import './scheduleWindow.css'

export default function ScheduleWindow(props) {
  // i should pass the current day from the App level instead of processing
  // the current date on each render
  const [scheduleElements, setScheduleElements] = useState([])
  const formatScedule = (arr) => {
    let today; 
    switch(new Date().getDay()) {
      case 0:
        today = 'Sunday';
        break;
      case 1:
        today = "Monday";
        break;
      case 2:
         today = "Tuesday";
        break;
      case 3:
        today = "Wednesday";
        break;
      case 4:
        today = "Thursday";
        break;
      case 5:
        today = "Friday";
        break;
      case 6:
        today = "Saturday";
    };
    console.log(today)
    arr.forEach(day => {
      if (day.day === today) {
        const formattedSchedule = day.scheduledPlans.map(plan => {
          console.log(plan)
        })
      }
      
    })
  }
  useEffect(() => {
    const formattedSchedule = formatScedule(props.schedule)

  }, [])
  return (
    <div id='schedule-window'></div>
  )
}

// taskNickname: 'Clean Roads',
//     taskLocation: 'Government House',
//     taskDescription: 'Shovel and the blow-dry the leaves out of the gutters',
//     taskPriority: 1,
//     dateSet: new Date('May, 20, 2022, 12:00:00'),
//     dateComplete: new Date('May, 23, 2022, 12:00:00'),
//     taskIsComplete: true,
