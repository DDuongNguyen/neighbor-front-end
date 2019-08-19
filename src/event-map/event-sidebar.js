import React from "react";
import { connect } from "react-redux";
import Events from './events.js'

class EventSidebar extends React.Component {


  conditionalEvents = () => {
    // debugger
    if(this.props.events){
      return (<Events
      name={this.props.events.name}
      description={this.props.events.description}
      time={this.props.events.time}
      host_name={this.props.events.host_name}
      event_address={this.props.events.event_address}
      number_of_guests={this.props.events.number_of_guests}/>)
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
    events: state.mapReducer.events
  })

  export default connect(mapStateToProps)(EventSidebar)



//
