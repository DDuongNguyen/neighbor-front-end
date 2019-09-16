import React, { Component } from 'react';
import NavBar from '../nav-bar/nav-bar.js'
import { connect } from "react-redux";
import UpdateForm from './update-form.js'
import userActions from '../actions/userActions'
class Profile extends Component {


  state={
    seen:false,
    file:{}
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    })
  }

  fileSelectedHandler = (event) => {
    this.setState({file: event.target.files[0]}, () => {
      if(this.state.file){
        let formData = new FormData()
        formData.append("image", this.state.file)
        this.props.updateUserImage(formData,this.props.currentUser.id)
      }
    })
  }

  render() {
    return (
      <div className='profile-page'>
      <NavBar/>
      <div className='profile-detail'>

      <div className='image-container'>
      <label htmlFor="file-input">
      <img src={this.props.currentUser.user_image} alt='user' id='user-avatar'/>
      </label>
      <input type='file' onChange= {this.fileSelectedHandler} id="file-input"/>
      </div>

      <h2>{this.props.currentUser.name}</h2>
      <p>Address: {this.props.currentUser.address}</p>
      <p>Phone Number: {this.props.currentUser.phone_number}</p>
      <button onClick={this.togglePop} id='edit-button'>
      <span>Edit</span>
      </button>
      {this.state.seen ? <UpdateForm toggle={this.togglePop} /> : null}
      </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
})
const mapDispatchToProps = {
  updateUserImage: userActions.updateUserImage
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
