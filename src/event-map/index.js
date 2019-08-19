import React, { Component } from 'react';
import EventMapContent from './event-map-content.js'
import Map from './gmap.js'
// import Map from './map.js'
import NavBar from '../nav-bar/nav-bar.js'
import { connect } from "react-redux";
import { ReactBingmaps } from 'react-bingmaps';
import Sidebar from './sidebar.js'

class EventMap extends Component {





  render() {
    return (
      <div>
      <h2>Layer 1: EventMap</h2>
      <EventMapContent/>
      <Map/>
      <NavBar/>
      </div>
    );
  }

}

const mapDispatchToProps = {

}


export default connect(null,mapDispatchToProps)(EventMap);
