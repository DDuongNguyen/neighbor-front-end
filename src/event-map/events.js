import React, { Component } from 'react';
import { connect } from "react-redux";
import eventActions from '../actions/eventActions.js'

class Events extends Component {

  fileSelectedHandler = () => {
    console.log('momo');
  }

  currentUserEvents = () => {
    if(this.props.className === 'user-event'){
    return(
      <div id='event-card'>

      <div id='img-container' className='image-upload'>
      <label for="file-input">
      <img id='upload-icon'src="http://cdn.onlinewebfonts.com/svg/img_234957.png"/>
      </label>
      <input type='file' onChange= {this.fileSelectedHandler} id="file-input"/>
      </div>

      <div id='line'/>

      <div id='event-descriptions'>
      <h1>{this.props.event.name}</h1>
      <h4>Description: {this.props.event.description}</h4>
      <p>Host Name: {this.props.event.host_name} </p>
      <p>Number of Guests:{this.props.event.number_of_guests}</p>
      </div>

      <div id='button-section'>
      <button id='invite-button' onClick={() => this.props.createInvite(this.props.event.host_id)}>Invite</button>
      <button id='message-button'>Message</button>
      </div>
      </div>
    )
    }
      else if(this.props.className === 'none-user-events'){

      return(
        <div id='event-card'>

        <div id='img-container' className='image-upload'>
        <label for="file-input">
        <img id='upload-icon'src="http://cdn.onlinewebfonts.com/svg/img_234957.png"/>
        </label>
        <input type='file' onChange= {this.fileSelectedHandler} id="file-input"/>
        </div>

        <div id='line'/>

        <div id='event-descriptions'>
        <h1>{this.props.event.name}</h1>
        <h4>Description: {this.props.event.description}</h4>
        <p>Host Name: {this.props.event.host_name} </p>
        <p>Number of Guests:{this.props.event.number_of_guests}</p>
        </div>

        <div id='button-section'>
        <button id='join-button' onClick={() => this.props.createInvite(this.props.event.host_id,this.props.currentUser.id,this.props.event.id)}>Join</button>
        <button id='message-button' >Message</button>
        </div>
        </div>
      )
    }
  }

  UserEvents = () => {

  }

  render() {
    console.log("events", this.props);
    return (
      <div>
      {this.currentUserEvents()}
      </div>
    );
  }

}

const mapStateToProps = state =>({
  currentUser: state.userReducer.currentUser,
  events: state.eventReducer.events
})

const mapDispatchToProps = {
  createInvite: eventActions.createInvite
}


export default connect(mapStateToProps,mapDispatchToProps)(Events)
