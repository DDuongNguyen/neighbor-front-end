import React from "react";
import { connect } from "react-redux";
import Events from './events.js'

class MySidebar extends React.Component {

  conditionalEvents = () => {
    if(this.props.currentUser.event_hosting){
    return this.props.currentUser.event_hosting.map(event => {
      return <Events className='user-event' key={event.id} event={event}/>
    })
  }
  }


  render() {
    return (
      <div className='sidebar'>
      {this.conditionalEvents()}
      </div>
    );
  }
}

const mapStateToProps = state =>({
  currentUser: state.userReducer.currentUser,
  events: state.eventReducer.events
})

export default connect(mapStateToProps)(MySidebar)



//
