import React, { Component } from 'react';
import Calendar from 'react-calendar'

class EventCalendar extends Component {

  render() {
    return (
      <div id='calendar-div'>
      <Calendar/>
      </div>
    );
  }

}

export default EventCalendar;
