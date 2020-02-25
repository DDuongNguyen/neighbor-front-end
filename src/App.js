import React from 'react';
import Routes from "./Routes.js";
import {connect} from 'react-redux'
import userActions from './actions/userActions'
import eventActions from './actions/eventActions'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

class App extends React.Component {

  componentDidMount(){
      this.props.saveEvents()
      this.props.getUsers()
    if (localStorage.token) {
      this.props.persistUser();
    }}



render(){
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
}

const mapDispatchToProps = {
  persistUser: userActions.persistUser,
  saveEvents: eventActions.saveEvents,
  getUsers: userActions.getUsers
}

const mapStateToProps = state => ({
  users:state.userReducer.users
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
