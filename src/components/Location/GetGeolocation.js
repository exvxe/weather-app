import React, { Component } from 'react';
import { connect } from 'react-redux'

import { setLocation } from '../../store/actions/placeActions'

class GetGeolocation extends Component {
    state = {
      location: [],
      locationType: "coords"
    }
    clickHandler = () => {
      if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
              this.setState({
                location: [position.coords.latitude.toFixed(4), position.coords.longitude.toFixed(4)]
              })
              this.props.setLocation(this.state.location, this.state.locationType)
            });
          } else {
            console.log('You must allow the browser to use your localization.')
          }
    }
    render = () => {
      return(
          <div className="coords">
          <button onClick={this.clickHandler}>Get Location</button>
          </div>
      )
    }
  }
  
  
  const mapStateToProps = (state) => {
    return {
        place: state.place
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location, locationType) => { dispatch(setLocation(location, locationType))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (GetGeolocation)
  
  