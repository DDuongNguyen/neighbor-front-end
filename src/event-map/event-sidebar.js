import React from "react";
import { connect } from "react-redux";
import Events from './events.js'

class EventSidebar extends React.Component {


  conditionalEvents = () => {
    if(this.props.user.id){
      const host_name= this.props.user.name
      const address= this.props.user.adress
      return this.props.user.event_hosting.map(event => {
        debugger
        return (<Events
        className='none-user-events'
        key= {event.id}
        event= {event}
        />)
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
    user: state.mapReducer.user
  })

  export default connect(mapStateToProps)(EventSidebar)



//
