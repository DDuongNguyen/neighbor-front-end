import React, { Component } from 'react';
import { connect } from "react-redux";
import GoogleMapReact from 'google-map-react';
import mapActions from '../actions/mapActions.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MySidebar from './my-sidebar.js'
import EventSidebar from './event-sidebar.js'


class gMap extends Component {

    renderAllEvents = () => {
      // debugger

      let users = this.props.users.filter(user => user.id !== this.props.currentUser.id)
      return users.map(user => {
        const longtitude=user.address_longtitude
        const latitude=user.address_latitude
        const host_name= user.name
        const address= user.address

        if (user.number_of_events_hosting > 0){
            return(
               <Marker
               onClick={() => this.props.openEventSidebar(user)}
               title={'event-marker.'}
               key={user.id}
               position={{
                 lat:latitude,
                 lng:longtitude
               }}
               />
             )}})
          }


    onMapClicked = () => {
      this.props.closeSidebar()
      this.props.closeEventSidebar()
    };



    conditionalSidebar = () => {
      if(this.props.sidebarStatus){
        return <MySidebar/>
      }
      else if (this.props.eventSidebarStatus) {
        // debugger
        return <EventSidebar/>
      }
      else {
        return null
      }
    }

  render() {
    const icon = "https://s3.amazonaws.com/awsmp-logos/datadoglogo.png";

    return (
      <div id='map-container'>

        {this.conditionalSidebar()}

      <div id='map'>
       <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        zoom={10}
         bootstrapURLKeys={{ key: 'AIzaSyADjgs40qnidjU2jRdew7QxOlYxjPHMcXg' }}
         initialCenter={{
            lat: 40.715282,
            lng: -74.005696
          }}
       >
       <Marker
       onClick={this.props.openSidebar}
       title={'current-user-marker'}
       position={{
         lat: this.props.currentUser.address_latitude,
         lng: this.props.currentUser.address_longtitude}}
       icon={{
         url: icon,
         anchor: new this.props.google.maps.Point(19,40),
         scaledSize: new this.props.google.maps.Size(40,40)
       }}
       />
       {this.renderAllEvents()}

       </Map>
       </div>
       </div>
        );
      }
    }

    const mapStateToProps = state =>({
      currentUser: state.userReducer.currentUser,
      events: state.eventReducer.events,
      sidebarStatus: state.mapReducer.sidebar,
      eventSidebarStatus: state.mapReducer.eventSidebar,
      users: state.userReducer.users
    })

    const mapDispatchToProps = {
      openSidebar: mapActions.openSidebar,
      closeSidebar: mapActions.closeSidebar,
      openEventSidebar: mapActions.openEventSidebar,
      closeEventSidebar: mapActions.closeEventSidebar
    }

    export default connect(mapStateToProps,mapDispatchToProps)(GoogleApiWrapper({
      apiKey: 'AIzaSyADjgs40qnidjU2jRdew7QxOlYxjPHMcXg'
    })(gMap))
