import React, { Component } from 'react';
import logo from '../assets/my-logo.png'

class Logo extends Component {

  render() {
    return (
      <div className='nav-bar-logo'>
      <img src={logo} alt='logo' className='logo'/>
      </div>
    );
  }

}

export default Logo;
