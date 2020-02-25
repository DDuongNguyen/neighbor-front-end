import React, { Component } from 'react';
import { connect } from "react-redux";
import  calendarActions from '../actions/calendarActions.js'
import  messageActions from '../actions/messageActions.js'

class Messages extends Component {

  state={
    content:''
  }


  handleSubmit=event=>{
    event.preventDefault()
    console.log(this.state);
    this.props.createMessage(this.props.currentUser.id,this.props.user.id,this.state.content)
    alert('You texted ')
  }


  handleChange=event=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <textarea
      onChange={this.handleChange}
      rows="4"
      cols="50"
      name='content'
      placeholder="Content..."/>
      <br/>
      <button>Submit</button>
      </form>
      <br/>
      <img src='http://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-59.gif' alt='cat' height='200px' width='200px'/>
      </div>
    );
  }

}

  const mapStateToProps= state => ({
      currentUser:state.userReducer.currentUser,
      time:state.calendarReducer.date,
      user:state.mapReducer.user
  })
  const mapDispatchToProps = {
    createEvent:calendarActions.createEvent,
    createMessage:messageActions.createMessage
  }

export default connect(mapStateToProps,mapDispatchToProps)(Messages);
