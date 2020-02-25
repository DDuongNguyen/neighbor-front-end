import React from "react";
import Sidebar from "react-sidebar";
import { connect } from "react-redux";

class App extends React.Component {

  render() {
    return (
      <Sidebar
             sidebar={<b>Sidebar content</b>}
             open={this.props.sidebarStatus}
             styles={{ sidebar: { background: "white" } }}
           >
           </Sidebar>
    );
  }
}


export default App


