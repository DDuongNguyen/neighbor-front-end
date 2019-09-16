import React, { Component } from 'react';
import { connect } from "react-redux";
import  userActions from '../actions/userActions.js'
import logo from '../assets/my-logo.png'
import NavBar from '../nav-bar/nav-bar.js'

class SignIn extends Component {
  state={
    username:'',
    password:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signIn(this.state)
    this.props.history.push('/map')
  }

  render() {
    return (
      <div>
      <NavBar/>
      <div className='log-in'>

      <div className='nb-sign-in-card'>
      <div className="logo"></div>

      <div class="heading">
      <h4 id='sign-in-word'>Sign In</h4>
      <div class="sign-up-link-container">
      <div><a id="sign-up-link" href="/signup" tabIndex="-1">Create Account</a> instead?</div>
      </div>
      </div>


      <form onSubmit={this.handleSubmit} id='sign-in-form' >
      <br/>
      <div class="nb-form-group">
      <label for="username" class="pm-form-label">Email or Username</label>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='username'
      className="nb-form-control"/>
      </div>

      <div class="nb-form-group">
      <label for="password" class="pm-form-label">Password</label>
      <br/>
      <input
      onChange={this.handleChange}
      type='password'
      name='password'
      className="nb-form-control"/>
      </div>
      <br/>

      <div class="nb-form-group">
      <input type="checkbox" id="remember-me-checkbox" />
      <label>Remember Me </label>
      <a class="trouble-signing-in-link" tabIndex="-1" href="/trouble-signing-in">Trouble signing in?</a>
      </div>

      <br/>

      <div class="pm-form-group">
      <button type="submit" class="nb-btn nb-btn-primary" id="sign-in-btn" tabIndex="3">
      Sign In
      </button>
      </div>


      </form>
      </div>
      </div>
      </div>
    );
  }

}
const mapStateToProps = state=>
  ({user:state})


const mapDispatchToProps = {
  signIn: userActions.signIn
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
