import React, { Component } from 'react';
import { connect } from "react-redux";
import userActions from '../actions/userActions.js'

class SignUp extends Component {
  state={
    name:'',
    username:'',
    password:'',
    phone_number:'',
    address:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    return (
      <div>
      <div className='log-in'>

      <div className='nb-card'>
      <div className="logo"></div>

      <div class="heading">
      <h4 id='sign-up-word'>Create Account</h4>
      <div class="sign-in-link-container">
      <div><a id="sign-in-link" href="/signin" tabindex="-1">Sign In</a> instead?</div>
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

      <div class="nb-form-group">
      <label for="name" class="pm-form-label">Name</label>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='name'
      className="nb-form-control"/>
      </div>

      <div class="nb-form-group">
      <label for="phone_number" class="pm-form-label">Phone Number</label>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='phone_number'
      className="nb-form-control"/>
      </div>

      <div class="nb-form-group">
      <label for="address" class="pm-form-label">Address</label>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='address'
      className="nb-form-control"/>
      </div>

      <br/>

      <div class="nb-form-group">
      <input type="checkbox" id="remember-me-checkbox" />
      <label>Remember Me </label>
      </div>

      <br/>

      <div class="pm-form-group">
      <button type="submit" class="nb-btn nb-btn-primary" id="sign-in-btn" tabindex="3">
      Create Free Account
      </button>
      <p class="terms-link">By signing up, you agree to the <a href="https://www.youtube.com/watch?v=wZZ7oFKsKzY" target="_blank" tabindex="-1">Terms of Use</a>.</p>
      </div>


      </form>
      </div>
      </div>
      </div>
    );
  }

}

const mapDispatchToProps = {
  signUp: userActions.signUp
}

export default connect(null,mapDispatchToProps)(SignUp);


// <div>
// <form onSubmit={this.handleSubmit} >
// <br/>
// <input
//
// type='text'
// name='username'
// placeholder="Username"
// className="sign-up sign-in"/>
// <br/>
// <input
// onChange={this.handleChange}
// type='password'
// name='password'
// placeholder="Password"
// className="sign-up sign-in"/>
// <br/>
// <input
// onChange={this.handleChange}
// type='text'
// name='name'
// placeholder="name"
// className="sign-up sign-in"/>
// <br/>
// <input
// onChange={this.handleChange}
// type='text'
// name='phone_number'
// placeholder="(___-___-____)"
// className="sign-up sign-in"/>
// <br/>
// <input
// onChange={this.handleChange}
// type='text'
// name='address'
// placeholder="Address"
// className="sign-up sign-in"/>
// <br/>
// <button type='submit'>Submit</button>
// </form>
