// with permission from https://github.com/fullcalendar/fullcalendar 

import React from 'react';
import { Calendar } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function fullCalendar()
 {
  
  // const calendar = new Calendar( {
  //   plugins: [dayGridPlugin],
  //   initialView: 'dayGridWeek',
  //   headerToolbar: {
  //     left: 'prev,next',
  //     center: 'title',
  //     right: 'dayGridWeek,dayGridDay' // user can switch between the two
  //   }
  // })

    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    )

  };

