import React, { Component } from 'react';
import { connect } from "react-redux";
import  calendarActions from '../actions/calendarActions.js'
import  messageActions from '../actions/messageActions.js'
import  eventActions from '../actions/eventActions.js'

class Guest extends Component {

  userDeleteInvite = () => {
    this.props.currentUserDeleteInvite(this.props.host_id,this.props.user_id,this.props.event_id)
    alert(`successfully uninvited ${this.props.name}`)
  }

  render() {
    console.log(this.props.host_id,this.props.user_id,this.props.event_id);
    return (
      <div>
      <li className='guest'
      onClick={this.userDeleteInvite}>
      {this.props.name}</li>
      </div>
    );
  }

}

  const mapStateToProps= state => ({
      currentUser:state.userReducer.currentUser,
      time:state.calendarReducer.date,
      user:state.mapReducer.user,
      users:state.userReducer.users
  })
  const mapDispatchToProps = {
    createEvent:calendarActions.createEvent,
    createInvite: eventActions.createInvite,
    createMessage:messageActions.createMessage,
    currentUserDeleteInvite: eventActions.currentUserDeleteInvite
  }

export default connect(mapStateToProps,mapDispatchToProps)(Guest);
