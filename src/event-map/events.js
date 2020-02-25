import React, { Component } from 'react';
import { connect } from "react-redux";
import eventActions from '../actions/eventActions.js'
import Messages from './messages.js'
import FriendList from './friend-list.js'
import GuestList from './guest-list.js'

class Events extends Component {

  state={
    seen:false,
    seen2:false,
    seen3:false,
    file:{}
  }

  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };

  togglePop2 = () => {
   this.setState({
    seen2: !this.state.seen2
   });
  };

  togglePop3 = () => {
   this.setState({
    seen3: !this.state.seen3
   });
  };

  fileSelectedHandler = (event) => {
    this.setState({file: event.target.files[0]}, () => {
      if(this.state.file){
        let formData = new FormData()
        formData.append("image", this.state.file)
        this.props.uploadPicture(formData,this.props.event.id)
      }
    })
    console.log(this.state);
  }

  handleInvite = () => {
    if(this.props.event.guest_list.some(guest => guest.name === this.props.currentUser.name)) {
      this.props.deleteInvite(this.props.event.host_id,this.props.currentUser.id,this.props.event.id)
    } else {
      // debugger
      this.props.createInvite(this.props.event.host_id,this.props.currentUser.id,this.props.event.id)
    }
  }

  currentUserEvents = () => {
    if(this.props.className === 'user-event'){
    return(
      <div id='event-card'>

      <div id='img-container' className='image-upload'>


      <label htmlFor="file-input">
      <img id='upload-icon'src={this.props.event.event_image}/>
      </label>
      <input type='file' onChange= {this.fileSelectedHandler} id="file-input"/>


      </div>

      <div id='line'/>

      <div id='event-descriptions'>
      <h1>{this.props.event.name}</h1>
      <h4>Description: {this.props.event.description}</h4>
      <p>Host Name: {this.props.event.host_name} </p>
      <p>Number of Guests:{this.props.event.number_of_guests}</p>
      <p>Time:{this.props.event.time}</p>
      </div>

      <div id='button-section'>
      <button className='invite-button'
      onClick={this.togglePop2}>Invite</button>

      {this.props.event.number_of_guests>0?
      <button className='invite-button'
      onClick={this.togglePop3}>GUEST LIST</button>:null}

      {this.state.seen2 ? <FriendList toggle={this.togglePop2} event={this.props.event}/> : null}
      {this.state.seen3 ? <GuestList toggle={this.togglePop3} event={this.props.event}/> : null}
      </div>
      </div>
    )
    }
      else if(this.props.className === 'none-user-events'){

      return(
        <div id='event-card'>

        <div id='img-container' className='image-upload'>
        <img id='user-icon'src={this.props.event.event_image}/>
        </div>

        <div id='line'/>

        <div id='event-descriptions'>
        <h1>{this.props.event.name}</h1>
        <h4>Description: {this.props.event.description}</h4>
        <p>Host Name: {this.props.event.host_name} </p>
        <p>Number of Guests:{this.props.event.number_of_guests}</p>
        <p>Time:{this.props.event.time}</p>
        </div>

        <div id='button-section'>

          {(this.props.event.guest_list.some(guest => guest.name === this.props.currentUser.name))?
          <button className='join-button'
            onClick={this.handleInvite}>Unjoin</button>:
          <button className='join-button'
            onClick={this.handleInvite}>Join</button>}


        <button id='message-button' onClick={this.togglePop}>Message</button>
        </div>
        {this.state.seen ? <Messages toggle={this.togglePop} /> : null}
        </div>
      )
    }
  }

  UserEvents = () => {

  }

  render() {
    console.log("ACTIVE STORAGE", this.state.file);
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
  createInvite: eventActions.createInvite,
  deleteInvite: eventActions.deleteInvite,
  uploadPicture: eventActions.uploadPicture
}


export default connect(mapStateToProps,mapDispatchToProps)(Events)
