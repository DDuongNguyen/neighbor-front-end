import React, { Component } from 'react';
import { connect } from "react-redux";
import  userActions from '../actions/userActions.js'
import  FuzzySearch from './fuzzy-search.js'
import  FirstSearchResult from './first-search-result.js'

class UpdateForm extends Component {

  state={
    name:'',
    phone_number:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    debugger
    this.props.updateUser(this.props.currentUser.id,this.state.name,this.state.phone_number,this.props.currecurrentUser.user_image,this.props.firstSearchResult)
    // this.props.history.push('/profile')
  }


  render() {
    return (
      <div className='modal'>
      <div className='modal_content'>
      <span className="x-mark"onClick={this.props.toggle}>&times;</span>
      <form onSubmit={this.handleSubmit}>
      <input
      onChange={this.handleChange}
      type='text'
      name='name'
      placeholder={this.props.currentUser.name}
      className="sign-up sign-in reset"/>
      <br/>
      <input
      onChange={this.handleChange}
      type='tel'
      name='phone_number'
      placeholder={this.props.currentUser.phone_number}
      className="sign-up sign-in"/>
      <FuzzySearch/>
      <button type='submit' id='edit-button'>Edit</button>
      </form>
      </div>
      </div>
    );
  }

}

  const mapStateToProps= state => ({
      currentUser:state.userReducer.currentUser,
      firstSearchResult: state.addressReducer.address
  })
  const mapDispatchToProps = {
      updateUser: userActions.updateUser
  }

export default connect(mapStateToProps,mapDispatchToProps)(UpdateForm);
