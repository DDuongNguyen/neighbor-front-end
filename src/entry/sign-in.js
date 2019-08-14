import React, { Component } from 'react';
import { connect } from "react-redux";
import  userActions from '../actions/userActions.js'

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
  }

  render() {
    return (
      <div>
      <h3>Layer 2: Entry-sign-in</h3>
      <div className='log-in'>
      <fieldset>

      <form onSubmit={this.handleSubmit} >
      <label>Sign in: </label>



      <input
      onChange={this.handleChange}
      type='text'
      name='username'
      placeholder="Username"
      className="sign-up sign-in reset"/>

      <input
      onChange={this.handleChange}
      type='password'
      name='password'
      placeholder="Password"
      className="sign-up sign-in"/>

      <button type='submit'>Submit</button>
      </form>
      </fieldset>

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
