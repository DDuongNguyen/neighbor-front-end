import React, { Component } from 'react';
import AddressForm from './AddressForm';


class App extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <h2>Geocode fuzzy search</h2>
        </div>

        <AddressForm />

      </div>

    );
  }
}

export default App;
