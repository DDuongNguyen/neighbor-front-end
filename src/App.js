import React from 'react';
import Routes from "./Routes.js";
import {connect} from 'react-redux'
import userActions from './actions/userActions'
import eventActions from './actions/eventActions'
import { BrowserRouter as Router } from "react-router-dom";
// import NavBar from './nav-bar/nav-bar.js'
import './App.css';

class App extends React.Component {

  componentDidMount(){
    // const a= '81 Prospect St, Brooklyn, NY, 11201, USA'
    // const b= 'Central Park Zoo'
    // fetch(`http://dev.virtualearth.net/REST/V1/Routes/Walking?waypoint.0=${a}&waypoint.1=${b}&distanceUnit=mi&optmz=distance&output=json&key=AoNK51DE7kLoGiY_RWNUvx3gFfgSsBHMiJN45CLjB9GIVNR7HheV8RMEd6bAc3ox`)
    // .then(resp => resp.json())
      this.props.saveEvents()
      this.props.getUsers()
    if (localStorage.token) {
      this.props.persistUser();
      // if(this.props.user.userReducer.currentUser !== {}){
      // const id= this.props.user.userReducer.currentUser.id
      // // debugger
      // fetch(`http://localhost:3000/users/${id}`)
      // .then(resp=>resp.json())
      // .then(data => {
      //   console.log(data);
        // debugger


      }
    }

render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>Main Comp: App</h1>
      <Router>
        <Routes />
      </Router>
      </header>
    </div>
  );
}
}

const mapDispatchToProps = {
  persistUser: userActions.persistUser,
  saveEvents: eventActions.saveEvents,
  getUsers: userActions.getUsers
}

const mapStateToProps = state => ({user:state})

export default connect(mapStateToProps,mapDispatchToProps)(App);
