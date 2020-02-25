import React, { Component } from 'react';
import { connect } from "react-redux";
import  calendarActions from '../actions/calendarActions.js'
import  messageActions from '../actions/messageActions.js'
import  Guest from './guest.js'

class GuestList extends Component {

  renderAllUser=()=>{
    // debugger
    let guests = this.props.event.guest_list
    return guests.map(user => {
      return (<Guest name={user.name} host_id={this.props.currentUser.id}  user_id={user.id} event_id={this.props.event.id}/>)
    })
  }

  render() {
    return (
      <div className='modal'>
      <div className='modal_content'>
      <span className='x-mark' onClick={this.props.toggle}>&times;</span>
      <ul id='guest-list'>Uninvite Guest</ul>
      {this.renderAllUser()}
      </div>
      </div>
    );
  }

}

  const mapStateToProps= state => ({
      currentUser:state.userReducer.currentUser,
      events: state.eventReducer.events,
      user:state.mapReducer.user,
      users:state.userReducer.users
  })
  const mapDispatchToProps = {
    createEvent:calendarActions.createEvent,
    createMessage:messageActions.createMessage
  }

export default connect(mapStateToProps,mapDispatchToProps)(GuestList);
