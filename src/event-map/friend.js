import React, { Component } from 'react';
import { connect } from "react-redux";
import  calendarActions from '../actions/calendarActions.js'
import  messageActions from '../actions/messageActions.js'
import  eventActions from '../actions/eventActions.js'

class Friend extends Component {

  userCreateInvite = () => {
    this.props.currentUserCreateInvite(this.props.host_id,this.props.user_id,this.props.event_id)
    alert(`successfully invited ${this.props.name}`)
  }

  render() {
    console.log(this.props.host_id,this.props.user_id,this.props.event_id);
    return (
      <div>
      <li className='friend'
      onClick={this.userCreateInvite}>
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
    currentUserCreateInvite: eventActions.currentUserCreateInvite
  }

export default connect(mapStateToProps,mapDispatchToProps)(Friend);
