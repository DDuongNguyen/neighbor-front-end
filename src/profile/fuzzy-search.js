import React, { Component } from 'react';
import  SearchingAddress from './searching-address.js'
import { connect } from "react-redux";


class FuzzySearch extends Component {


render() {
  return (
    <div className="container">
      <SearchingAddress/>
      {this.props.firstSearchResult?<span className='reccomdentation'>Please use the reccomended address instead: {this.props.firstSearchResult}</span>:null}

      <br/>
    </div>
  );
}

}

const mapStateToProps = state =>({
currentUser: state.userReducer.currentUser,
firstSearchResult: state.addressReducer.address
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps,mapDispatchToProps)(FuzzySearch)
