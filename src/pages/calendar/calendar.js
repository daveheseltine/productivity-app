import React from 'react';
import { Container } from 'react-bootstrap';
import Row from '../../components/Row';
import './calendar.css'

// with permission from https://github.com/fullcalendar/fullcalendar 
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Calendar(props){

  let testEntry = JSON.parse(window.localStorage.getItem('toDoListItems'));

    // console.log(testEntry);

  return (
    <div>
    <Container id='formbackground'  style={{fontFamily: 'Georgia'}}>
    <Row>
    <div>
        <h2>Calendar</h2>
    </div>
    </Row>
  </Container>
    <Container id='calbackground'>
    <Row>
    <FullCalendar
      
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      handleWindowResize={false}
      // height={350}
      // aspectRatio={2}
      events={testEntry}
      weekends={false}
    />
        </Row>
      </Container>
</div>    
  )
  
 };
