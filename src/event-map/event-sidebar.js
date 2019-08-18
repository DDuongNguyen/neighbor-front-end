import React from "react";
import { connect } from "react-redux";
import Events from './events.js'

class EventSidebar extends React.Component {


  conditionalEvents = () => {
    // debugger
    if(this.props.event){
      return (<Events
      name={this.props.event.name}
      description={this.props.event.description}
      time={this.props.event.time}
      host_name={this.props.event.host_name}
      event_address={this.props.event.event_address}
      number_of_guests={this.props.event.number_of_guests}/>)
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
    event: state.mapReducer.event
  })

  export default connect(mapStateToProps)(EventSidebar)



//
