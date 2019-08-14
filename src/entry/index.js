import React, { Component } from 'react';
import SignIn from './sign-in.js'
// import SignUp from './sign-up.js'
import SignUp from './sign-up-validate.js'
import NavBar from '../nav-bar/nav-bar.js'
import {connect} from 'react-redux'
class Entry extends Component {

// renderUser= ()=> {
//   if(this.props.currentUser){
//         return
//   }
// }


  render() {
    console.log(this.props&&this.props.currentUser.name);
    return (
      <div>
      <h2>Layer 1: Entry</h2>
      <h1>Name: {this.props.currentUser.name} </h1>
      <SignIn/>
      <SignUp/>
      <NavBar/>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser
})
export default connect(mapStateToProps)(Entry);
