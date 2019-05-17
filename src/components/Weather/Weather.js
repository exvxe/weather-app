import React, { Component} from 'react';
import { connect } from 'react-redux'

import { fetchWeather } from '../../store/actions/weatherActions';

class Weather extends Component {
    componentDidMount = () => {
        this.props.fetchWeather(this.props.place.location, this.props.place.locationType);
    }
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps.place !== this.props.place) {
            this.props.fetchWeather(this.props.place.location, this.props.place.locationType);
        }
    }
    render = () => {
        if(this.props.data.fetched) {
            return(
                <div className="weather-wrapper">
                    <h1 className="weather_temp">{Math.round(this.props.data.fetched.main.temp)}°</h1>
                    <span className="weather_desc">{this.props.data.fetched.weather[0].main}</span>
                    <span className="weather_city">{this.props.data.fetched.name}</span>
                    <div className="weather_detailed">
                        <span className="weather_pressure">Pressure: {this.props.data.fetched.main.pressure} hPa</span>
                        <span className="weather_humidity">Humidity: {this.props.data.fetched.main.humidity} %</span>
                        <span className="weather_wind">Wind speed: {(this.props.data.fetched.wind.speed * 3.6).toFixed(1)} km/h</span>
                    </div>
                </div>
            )
        } else {
            return(
            <div className="weather-wrapper">
            downloading weather...
            </div>)
        }

    }
}

const mapStateToProps = (state) => {
    return {
        place: state.place,
        data: state.data
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (location, locationType) => { dispatch(fetchWeather(location, locationType))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Weather)

