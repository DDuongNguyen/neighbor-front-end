import React, { Component } from 'react';
import Calendar from 'react-calendar'
import { connect } from "react-redux";
import calendarActions from '../actions/calendarActions.js'
import EventCalendarContent from './event-calendar-content.js'
import NavBar from '../nav-bar/nav-bar.js'

class EventCalendar extends Component {

  conditionalSidebar = () => {
    if(this.props.calendarSidebarStatus){
      return <EventCalendarContent/>
    }
    else {
      return null
    }}

  render() {
    return (
      <div>
      <NavBar/>
      <div  id='calendar-container'>
      <Calendar onClickDay={(stuff)=>this.props.openCalendarSidebar(stuff)}/>
      {this.conditionalSidebar()}
      </div>
      </div>
    );
  }

}
const mapStateToProps = state =>({
  calendarSidebarStatus: state.calendarReducer.sidebar
})

const mapDispatchToProps = {
  openCalendarSidebar: calendarActions.openCalendarSidebar,
  closeCalendarSidebar: calendarActions.closeCalendarSidebar}

export default connect(mapStateToProps,mapDispatchToProps)(EventCalendar);
