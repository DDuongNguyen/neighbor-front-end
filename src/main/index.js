import React, { Component } from 'react';
import MainContent from './main-content.js'
import NavBar from '../nav-bar/nav-bar.js'
class Main extends Component {

  render() {
    return (
      <div>
      <NavBar/>
      <MainContent/>
      </div>
    );
  }

}

export default Main;
