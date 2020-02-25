import React, { Component } from 'react';
import { connect } from "react-redux";
import  userActions from '../actions/userActions.js'
import { withRouter } from 'react-router-dom'

class Sections extends Component {

  procLogout=() => {
    // debugger
    this.props.logOut()
    this.props.history.push('/about')
  }

  conditionalSections  = () => {
    if (this.props.currentUser.id){
      // debugger
      return(
        <div>
        <div className="site-nav">

        <div className="main-menu">
        <ul>
        <li><a href='/about'>ABOUT</a></li>
        <li><a href='/map'>MAP</a></li>
        <li><a href='/calendar'>SCHEDULE</a></li>
        <li><a href='/profile'>PROFILE</a></li>
        </ul>
        </div>

        <div className='secondary-menu'>
        <a className='nav-button' onClick={this.procLogout}>Sign Out</a>
        </div>

        </div>

        </div>
      )
    }
    else{
      return(
        <div className='site-nav'>

        <div className="main-menu">
        <ul>
        <li><a href='/about'>ABOUT</a></li>
        <li><a href='/map'>MAP</a></li>
        </ul>
        </div>

        <div className='secondary-menu'>
        <a className='nav-button' href='/signin'>Sign In</a>
        </div>

        </div>)}
  }



  render() {
    return (
      <div className='header-nav'>
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sections));
