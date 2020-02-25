import React, { Component } from 'react';
import NavBar from '../nav-bar/nav-bar.js';
import {connect} from 'react-redux'


class Welcome extends Component {

  renderWelcome = () =>{
    // debugger
    if(this.props.currentUser.id){
      return(
        <div className='welcome-content'>
        <h1>Welcome To The NeighborHood</h1>
        <p>NeighborHood is a platform for finding and building local communities. People use NeighborHood to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together.</p>
        <a class="nav-button" href="/map">Discover Your NeighborHood</a>
        </div>
      )}
      else{
        return(
          <div className='welcome-content'>
          <h1>Welcome To The NeighborHood</h1>
          <p>NeighborHood is a platform for finding and building local communities. People use NeighborHood to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together.</p>
          <a class="nav-button" href="/signIn">Join NeighborHood</a>
          </div>
        )
      }
    }

  render() {
    return (
      <div className='welcome-page'>
      <NavBar/>
      {this.renderWelcome()}
      </div>
    );
  }



}

const mapStateToProps = state=>
({currentUser:state.userReducer.currentUser})

export default connect(mapStateToProps)(Welcome);
