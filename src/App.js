import React, { Component} from 'react';
import './styles/app.styl'

import Location from './components/location/Location'
import Weather from './components/weather/Weather'

class App extends Component {
  render = () => {
    return(
        <div className="wrapper">
          <Weather/>
          <Location/>
        </div>
    )
  }
}

export default (App)

