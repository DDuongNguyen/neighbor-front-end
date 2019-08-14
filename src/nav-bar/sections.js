import React, { Component } from 'react';
import { connect } from "react-redux";
import  userActions from '../actions/userActions.js'

class Sections extends Component {

  render() {
    return (
      <div>
      <h4>Layer 3: NavBar-sections</h4>
      <button onClick={this.props.logOut}>Sign Out</button>
      </div>
    );
  }

}
const mapDispatchToProps={
  logOut: userActions.logOut
}
export default connect(null,mapDispatchToProps)(Sections);
