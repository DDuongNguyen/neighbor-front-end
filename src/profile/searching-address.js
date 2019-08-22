import React, { Component } from 'react';
import addressActions from '../actions/addressActions'
import { connect } from "react-redux";

class SearchingAddress extends Component {

  state={
    address:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    },() => this.props.grabAddress(this.state.address))


  }

  render() {
    return (
      <div>
      <input
      onChange={this.handleChange}
      type='text'
      name='address'
      value={this.state.address}
      placeholder='Your Address'/>
      </div>
    );
  }

}

const mapStateToProps= state => ({
    currentUser:state.userReducer.currentUser,
})
const mapDispatchToProps = {
  grabAddress:addressActions.grabAddress,
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchingAddress);
