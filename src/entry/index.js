import React, { Component } from 'react';
import SignIn from './sign-in.js'
import SignUp from './sign-up.js'
// import SignUp from './sign-up-validate.js'
import NavBar from '../nav-bar/nav-bar.js'
import {connect} from 'react-redux'
import userActions from '../actions/userActions'
import {Link} from 'react-router-dom'

class Entry extends Component {
  state={
    file:{}
  }

  fileSelectedHandler = (event) => {
    this.setState({file: event.target.files[0]}, () => {
      if(this.state.file){
        let formData = new FormData()
        formData.append("image", this.state.file)
        this.props.updateUserImage(formData,this.props.currentUser.id)
      }
    })
    console.log(this.state);
  }

  renderFewEvents= ()=> {
    if(this.props.users){
      const size= 5
      const firstUsers= this.props.user.slice(0,size)
      firstUsers.map(user => {
        return
      })
    }
  }

  renderUser= ()=> {
    if(this.props.currentUser.event_hosting){
          return (
            <div>
              <div id='img-container' className='image-upload'>


              <label htmlFor="file-input">
              <img src={this.props.currentUser.user_image} alt='user' id='user-avatar'/>
              </label>
              <input type='file' onChange= {this.fileSelectedHandler} id="file-input"/>


              </div>

              <div className='entry-infos'>
              <h1>Name: {this.props.currentUser.name} </h1>
              <h3>Upcoming Hosting Event:{this.props.currentUser.event_hosting[0].name} on {this.props.currentUser.event_hosting[0].time}  </h3>
              {this.props.currentUser.event_going.name?
                <h3>Upcoming Attending Event:{this.props.currentUser.event_going[0].event_name} on {this.props.currentUser.event_hosting[0].time}</h3>
                :null}
              </div>
            </div>
          )
    }
  }


  render() {
    if(this.props.currentUser){

    return (
      <div className='entry-page'>
      <NavBar/>
      {this.renderUser()}
      </div>
    );
  }
  }

}
const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  users: state.userReducer.users
})

const mapDispatchToProps = {
  updateUserImage: userActions.updateUserImage
}
export default connect(mapStateToProps,mapDispatchToProps)(Entry);






//
// <h1>Upcoming Hosting Event: {this.props.currentUser &&  this.props.currentUser.event_hosting[0].name} </h1>


// <h1>Upcoming Attending Event: {this.props.currentUser && this.props.currentUser.event_going} </h1>
