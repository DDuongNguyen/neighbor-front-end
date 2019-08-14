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
      <h3>Layer 2: Entry-sign-up</h3>
      <div className='sign-up'>
      <fieldset>

      <form onSubmit={this.handleSubmit} >
      <label>Sign up </label>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='username'
      placeholder="Username"
      className="sign-up sign-in"/>
      <br/>
      <input
      onChange={this.handleChange}
      type='password'
      name='password'
      placeholder="Password"
      className="sign-up sign-in"/>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='name'
      placeholder="name"
      className="sign-up sign-in"/>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='phone_number'
      placeholder="(___-___-____)"
      className="sign-up sign-in"/>
      <br/>
      <input
      onChange={this.handleChange}
      type='text'
      name='address'
      placeholder="Address"
      className="sign-up sign-in"/>
      <br/>
      <button type='submit'>Submit</button>
      </form>

      </fieldset>

      </div>
      </div>
    );
  }

}

const mapDispatchToProps = {
  signUp: userActions.signUp
}

export default connect(null,mapDispatchToProps)(SignUp);
