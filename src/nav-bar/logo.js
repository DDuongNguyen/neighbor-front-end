import React, { Component } from 'react';
import logo from '../assets/my-logo.png'

class Logo extends Component {

  render() {
    return (
      <div>
      <img src={logo} alt='logo' />
      </div>
    );
  }

}

export default Logo;
