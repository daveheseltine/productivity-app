// with permission from https://github.com/fullcalendar/fullcalendar 

import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import { Calendar } from '@fullcalendar/core';

// const calendar = new Calendar(calendarEl, {
//   plugins: [ dayGridPlugin ],
//   initialView: 'dayGridMonth',
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,timeGridWeek,listWeek'
//   },
//   contentHeight: 350,
//   aspectRatio: 1.35


// })

export default function fullCalendar()
 {
  
 const testEntry = [
    { 
      title: 'event 3 testing', 
      date: '2023-03-06' 
    },
    { 
      title: 'event 5 testing', 
      date: '2023-04-06' 
    },
    { 
      title: 'mvp goal', 
      date: '2023-03-28' 
    },
    { 
      title: 'presentation date', 
      date: '2023-03-30' 
    },
  ]

  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      handleWindowResize={false}
      // height={350}
      // aspectRatio={2}
      events={testEntry}
      weekends={false}
    />
  )
  
 };
