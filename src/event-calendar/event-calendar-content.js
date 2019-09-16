import React, { Component } from 'react';
import { connect } from "react-redux";
import  calendarActions from '../actions/calendarActions.js'

class EventCalendarContent extends Component {

  state={
    eventName:'',
    eventDescription:''
  }


  handleSubmit=event=>{
    event.preventDefault()
    console.log(this.state);
    debugger
    this.props.createEvent(this.props.currentUser.id,this.state.eventName,this.state.eventDescription,this.props.time)
    alert('You have successfully created an event')
  }

  handleChange=event=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render() {
    return (
      <div className='calendar-sidebar'>
      <h1>Make an event</h1>
      <form onSubmit={this.handleSubmit}>
      <input
      onChange={this.handleChange}
      type='text'
      name='eventName'
      placeholder="Event Name"/>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='eventDescription'
      placeholder="Event Description"/>
      <br/>
      <button id='join-button'>Submit</button>
      </form>
      <br/>
      <img src='http://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-59.gif' alt='cat' height='200px' width='200px'/>
      </div>
    );
  }

}
const mapStateToProps= state => ({
    currentUser:state.userReducer.currentUser,
    time:state.calendarReducer.date
})
const mapDispatchToProps = {
  createEvent:calendarActions.createEvent
}

export default connect(mapStateToProps,mapDispatchToProps)(EventCalendarContent);
