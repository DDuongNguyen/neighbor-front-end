import React, { Component } from 'react';
import { connect } from "react-redux";
import  calendarActions from '../actions/calendarActions.js'
import  messageActions from '../actions/messageActions.js'
import  Friend from './friend.js'

class FriendList extends Component {

  renderAllUser=()=>{
    let users = this.props.users.filter(user => user.id !== this.props.currentUser.id)
    let guests = this.props.event.guest_list
    let noneInvitedUser= users.filter(user => !guests.some(guest=> user.name === guest.name))
    return noneInvitedUser.map(user => {
      return (<Friend name={user.name} host_id={this.props.currentUser.id}  user_id={user.id} event_id={this.props.event.id}/>)
    })
  }

  render() {
    return (
      <div className='modal'>
      <div className='modal_content'>
      <span className='x-mark' onClick={this.props.toggle}>&times;</span>
      <ul id='friend-list'>Add Guest</ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(FriendList);
