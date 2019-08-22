import React, { Component } from 'react';
import NavBar from '../nav-bar/nav-bar.js'
import { connect } from "react-redux";
import UpdateForm from './update-form.js'
class Profile extends Component {

  state={
    seen:false
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    })
  }

  render() {
    return (
      <div>
      <h2>{this.props.currentUser.name}</h2>
      <h2>Address: {this.props.currentUser.address}</h2>
      <h2>Phone Number: {this.props.currentUser.phone_number}</h2>
      <button onClick={this.togglePop}>
      <span>Edit</span>
      </button>
      {this.state.seen ? <UpdateForm toggle={this.togglePop} /> : null}
      </div>
    );
  }

}

const mapStateToProps = state => ({
    currentUser:state.userReducer.currentUser
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
