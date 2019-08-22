import React, { Component } from 'react';
import SignIn from './sign-in.js'
import SignUp from './sign-up.js'
// import SignUp from './sign-up-validate.js'
import NavBar from '../nav-bar/nav-bar.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Entry extends Component {

renderUser= ()=> {
  if(this.props.currentUser.event_hosting){
        return (
            <div>
            <h1>Name: {this.props.currentUser.name} </h1>
            <h3>Upcoming Hosting Event:{this.props.currentUser.event_hosting[0].name} on {this.props.currentUser.event_hosting[0].time}  </h3>
            {this.props.currentUser.event_going.name?<h3>Upcoming Attending Event:{this.props.currentUser.event_going[0].event_name} on {this.props.currentUser.event_hosting[0].time}</h3>:null}

            </div>
        )
  }
}


  render() {
    if(this.props.currentUser){

    return (
      <div>
      <NavBar/>
      {this.renderUser()}
      </div>
    );
  }
  }

}
const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser
})
export default connect(mapStateToProps)(Entry);






//
// <h1>Upcoming Hosting Event: {this.props.currentUser &&  this.props.currentUser.event_hosting[0].name} </h1>


// <h1>Upcoming Attending Event: {this.props.currentUser && this.props.currentUser.event_going} </h1>
