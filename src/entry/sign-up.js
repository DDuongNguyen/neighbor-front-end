import React, { Component } from 'react';
import { connect } from "react-redux";
import userActions from '../actions/userActions.js'
import house from '../assets/trans-house.png'
import NavBar from '../nav-bar/nav-bar.js'

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
    this.props.history.push('/signin')
  }

  render() {
    return (
      <div>
      <NavBar/>
      <div className='log-in'>

      <div className='nb-sign-up-card'>

      <div className= 'left-section'>
      <div className="sign-up-logo"></div>
      <div className="text-container">
            <h2>WHY SIGN UP?</h2>
            <h4>
              <ul>
                <li>I worked real hard on this</li>
                <li>I need a job after this</li>
                <li>I think it's fun</li>
                <li>It's free...</li>
              </ul>
            </h4>
      </div>
      <div className="side-image">
      <img src={house} alt='houses' className='house-image'/>
      </div>
      </div>

      <div className='right-section'>
      <div className="heading">
      <h4 id='sign-up-word'>Create Account</h4>
      <div className="sign-in-link-container">
      <div><a id="sign-in-link" href="/signin" tabIndex="-1">Sign In</a> instead?</div>
      </div>
      </div>


      <form onSubmit={this.handleSubmit} id='sign-in-form' >


      <div className="nb-form-group">
      <label htmlFor="username" className="nb-form-label">Email or Username</label>

      <input
      onChange={this.handleChange}
      type='text'
      name='username'
      className="nb-form-control"/>
      </div>

      <div className="nb-form-group">
      <label htmlFor="password" className="nb-form-label">Password</label>

      <input
      onChange={this.handleChange}
      type='password'
      name='password'
      className="nb-form-control"/>
      </div>

      <div className="nb-form-group">
      <label htmlFor="name" className="nb-form-label">Name</label>

      <input
      onChange={this.handleChange}
      type='text'
      name='name'
      className="nb-form-control"/>
      </div>

      <div className="nb-form-group">
      <label htmlFor="phone_number" className="nb-form-label">Phone Number</label>

      <input
      onChange={this.handleChange}
      type='text'
      name='phone_number'
      className="nb-form-control"/>
      </div>

      <div className="nb-form-group">
      <label htmlFor="address" className="nb-form-label">Address</label>

      <input
      onChange={this.handleChange}
      type='text'
      name='address'
      className="nb-form-control"/>
      </div>



      <div className="nb-form-group">
      <input type="checkbox" id="remember-me-checkbox" />
      <label>Remember Me </label>
      </div>



      <div className="nb-form-group">
      <button type="submit" className="nb-btn nb-btn-primary" id="sign-in-btn" tabIndex="3">
      Create Free Account
      </button>
      <p className="terms-link">By signing up, you agree to the <a href="https://www.youtube.com/watch?v=jTf03_rzVt0" target="_blank" tabIndex="-1">Terms of Use</a>.</p>
      </div>


      </form>
      </div>
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
