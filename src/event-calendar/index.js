import React, { Component } from 'react';
import Calendar from './calendar.js'
import EventCalendarContent from './event-calendar-content.js'
import NavBar from '../nav-bar/nav-bar.js'

class EventCalendar extends Component {

  render() {
    return (
      <div>
      <h2>Layer 1: EventCalendar</h2>
      <Calendar/>
      <EventCalendarContent/>
      <NavBar/>
      </div>
    );
  }

}

export default EventCalendar;
