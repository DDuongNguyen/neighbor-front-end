import React, { Component } from 'react';
import MainContent from './main-content.js'
import NavBar from '../nav-bar/nav-bar.js'
class Main extends Component {

  render() {
    return (
      <div>
      <h2>Layer 1: Main</h2>
      <MainContent/>
      <NavBar/>
      </div>
    );
  }

}

export default Main;
