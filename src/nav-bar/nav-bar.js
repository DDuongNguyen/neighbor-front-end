import React, { Component } from 'react';
import Logo from './logo.js'
import Sections from './sections.js'

class NavBar extends Component {

  render() {
    return (
      <div>
      <Logo/>
      <Sections/>
      </div>
    );
  }

}

export default NavBar;
