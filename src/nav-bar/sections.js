import React, { Component } from 'react';
import { connect } from "react-redux";
import  userActions from '../actions/userActions.js'

class Sections extends Component {

  conditionalSections  = () => {
    if (this.props.currentUser.id){
      // debugger
      return(
        <div className="nav-section">
        <ul>
        <li>Schedule</li>
        <a className='profile' href='/profile'>Sign in</a>
        <li id="logging"onClick={this.props.logOut}>Sign Out</li>
        </ul>
        </div>
      )
    }
    else{
      return(
        <div>
        <a className='sign-up' href='/signin'>Sign in</a>
        <a className='sign-up' href='/signup'>Sign up</a>
        </div>)}
  }



  render() {
    return (
      <div>
      <h4>Layer 3: NavBar-sections</h4>
      {this.conditionalSections ()}
      </div>
    );
  }

}
const mapDispatchToProps={
  logOut: userActions.logOut
}

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(Sections);
