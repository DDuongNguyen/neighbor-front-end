import React, { Component } from 'react';
import { connect } from "react-redux";
import GoogleMapReact from 'google-map-react';
import mapActions from '../actions/mapActions.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import Sidebar from './sidebar.js'
import MySidebar from './my-sidebar.js'
import EventSidebar from './event-sidebar.js'
// import {GoogleMap,withScriptjs,withGoogleMap,Marker} from 'react-google-maps';



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
      // return(this.props.eventSidebarStatus ? <EventSidebar/>: null)
      // debugger
      // if(event.target.parentNode.title === 'current-user-marker'){
      //   return(this.props.sidebarStatus ? <MySidebar className='side-bar'/>: null)
      // }
      // else{
      //   return(this.props.sidebarStatus ? <EventSidebar className='side-bar'/>: null)
      // }
    }

  render() {
    const icon= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96a97770-7d16-4f0b-b2b5-e47810c4f2a0/d8m16rm-65395600-7598-4280-9a22-119beef84de8.png/v1/fill/w_776,h_1029,strp/dragon_age_inquisitor_helmet_silhouette_by_kiraakumachi_d8m16rm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMiIsInBhdGgiOiJcL2ZcLzk2YTk3NzcwLTdkMTYtNGYwYi1iMmI1LWU0NzgxMGM0ZjJhMFwvZDhtMTZybS02NTM5NTYwMC03NTk4LTQyODAtOWEyMi0xMTliZWVmODRkZTgucG5nIiwid2lkdGgiOiI8PTk4MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ii5I7pvymfavhDecwmcDdviyTtxq1Hl4AcvbTRwNozs'

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

    // export default connect(mapStateToProps)(gMap);
    export default connect(mapStateToProps,mapDispatchToProps)(GoogleApiWrapper({
      apiKey: 'AIzaSyADjgs40qnidjU2jRdew7QxOlYxjPHMcXg'
    })(gMap))
