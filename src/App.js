import React, { Component} from 'react';
import './styles/app.styl'

import Location from './components/Location/Location'

class App extends Component {
  render() {
    return(
        <div className="wrapper">
          <Location/>
        </div>
    )
  }
}

export default (App)

