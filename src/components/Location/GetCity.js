import React, { Component } from 'react';
import { connect } from 'react-redux'

import { setLocation } from '../../store/actions/placeActions'

class GetCity extends Component {
    state = {
      location: [],
      locationType: "city",
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
    })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.setLocation(this.state.location, this.state.locationType)
    }
    render = () => {
      return(
          <div className="city">
            <form onSubmit={this.handleSubmit}>
              <label>
                City:
                <input type="text" id="location" onChange={this.handleChange} />
              </label>
              <input type="submit" value="Set" />
            </form>
          </div>
      )
    }
  }
  
  
  const mapStateToProps = (state) => {
    return {
      place: state.location
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location, locationType) => { dispatch(setLocation(location, locationType))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (GetCity)
  
  