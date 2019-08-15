import React, { Component } from 'react';
import { connect } from "react-redux";
import  userActions from '../actions/userActions.js'

class Sections extends Component {

  conditionalNav = () => {
    if (this.props.currentUser.id){
      // debugger
      return(
        <button onClick={this.props.logOut}>Sign Out</button>
      )
    }
    else{
      // debugger
      return(
        <div>
        <button>Log In</button>
        <button>Sign up</button>
        </div>)}
  }



  render() {
    return (
      <div>
      <h4>Layer 3: NavBar-sections</h4>
      {this.conditionalNav()}
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
