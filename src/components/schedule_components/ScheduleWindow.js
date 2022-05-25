import React, { useEffect, useState } from 'react'
import ScheduleTimeslot from './ScheduleTimeslot';
import './scheduleWindow.css'

export default function ScheduleWindow(props) {
  // i should pass the current day from the App level instead of processing
  // the current date on each render
  const [scheduleElements, setScheduleElements] = useState([])
  const filterScheduleDay = (arr) => {
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
    const todaysPlan = arr.filter(day => day.day === today)
    return todaysPlan[0]
  }
  const formatScedule = (todaysPlan) => {
    const formattedTimeslots = todaysPlan.scheduledPlans.map(hour => {
      console.log(hour)
      return (
        <ScheduleTimeslot
          startTime={hour.startTime}
          endTime={hour.endTime}
          plan={hour.plan}
          description={hour.description ? hour.description : ''}
        />
      )
    })

    return formattedTimeslots;
  }
  useEffect(() => {
    const currentScheduledDay = filterScheduleDay(props.schedule)
    const formattedSchedule = formatScedule(currentScheduledDay)
    setScheduleElements(formattedSchedule)
  }, [])
  return (
    <div id='schedule-window'>{scheduleElements ? scheduleElements : 'test'}</div>
  )
}

// taskNickname: 'Clean Roads',
//     taskLocation: 'Government House',
//     taskDescription: 'Shovel and the blow-dry the leaves out of the gutters',
//     taskPriority: 1,
//     dateSet: new Date('May, 20, 2022, 12:00:00'),
//     dateComplete: new Date('May, 23, 2022, 12:00:00'),
//     taskIsComplete: true,
