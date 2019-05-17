import React, { Component} from 'react';
import { connect } from 'react-redux'

import GetGeolocation from './GetGeolocation'
import GetCity from './GetCity'

class Location extends Component {
    render() {
      return(
          <div className="location">
          {this.props.location.location}
          <GetGeolocation/>
          <GetCity/>
          </div>
      )
    }
  }
  
  
  const mapStateToProps = (state) => {
    return {
        location: state.location
    }
  }
  
  
  export default connect(mapStateToProps) (Location)
  
  