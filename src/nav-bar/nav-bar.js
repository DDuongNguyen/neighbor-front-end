import React, { Component } from 'react';
import Sections from './sections.js'
import logo from '../assets/my-logo.png'

class NavBar extends Component {

  render() {
    return (
      <div className='nav-bar'>
      <a id="home-page" href="/about" tabindex="-1">
      <img src={logo} alt='logo' id='nav-logo'/>
      </a>
      <Sections/>
      </div>
    );
  }

}

export default NavBar;
