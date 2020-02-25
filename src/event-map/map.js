import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import { connect } from "react-redux";
class Map extends Component {

  state={
    longtitude:"",
    latitude:"",
    name:''
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      if(!!this.props.currentUser){
  const address= this.props.currentUser.address

  fetch(`http://dev.virtualearth.net/REST/v1/Locations/${address}?o=json&key=AoNK51DE7kLoGiY_RWNUvx3gFfgSsBHMiJN45CLjB9GIVNR7HheV8RMEd6bAc3ox`)
  .then(resp=>resp.json())
  .then(data => {
    debugger
    this.setState({
      longtitude: data.resourceSets[0].resources[0].point.coordinates[0],
      latitude: data.resourceSets[0].resources[0].point.coordinates[1],
      name: data.resourceSets[0].resources[0].name
    })
  })}}}

  renderMapAfterFetch= () =>{
    const key ="AoNK51DE7kLoGiY_RWNUvx3gFfgSsBHMiJN45CLjB9GIVNR7HheV8RMEd6bAc3ox"
    {
    return (

      <ReactBingmaps
        ref="bingMap"
        id = "map"
        bingmapKey = {key}
        zoom = {13}

        center ={this.props.currentUser.id?
          [this.state.longtitude,this.state.latitude]:null}

        infoboxesWithPushPins ={[
          {
          "location":[this.state.longtitude,this.state.latitude],
          "addHandler":"click",
          "infoboxOption": { title: 'Funny Joke', description: 'US ' },
          "pushPinOption":{icon: 'gmark.png',title:this.state.name,description:'big '}
        },
            {
            "location":[48.8584,2.2945],
            "addHandler":"click",
            "infoboxOption": { title: 'French Joke', description: 'French ' },
            "pushPinOption":{icon: 'gmark.png',title:'france',description:'big '}
          }

      ]}
        regularPolygons = {
        [
              {
                      "center":[this.state.longtitude, this.state.latitude],
                      "radius":.5,
                      "points":1000,
                      "option": { strokeThickness: 1}
                    }
                  ]
                }
      >
      </ReactBingmaps>
    )}
  }


  render() {
    console.log(this.props.currentUser);
    return (
      <div>
      <h3>Layer 2: EventMap--map</h3>
      <fieldset>
      {this.renderMapAfterFetch()}
      </fieldset>
      </div>
    );
  }

}
const mapStateToProps = store => ({
  currentUser:store.userReducer.currentUser
})

export default connect(mapStateToProps)(Map);







