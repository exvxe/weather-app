import axios from 'axios';

export const getWeather = (weather) => {
    return {
      type: 'GET_WEATHER',
      weather
    }
  };

export const fetchWeather = (location, locationType) => {
  let url;
  if (locationType == "coords") {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&APPID=ba31b757b36851b819d7731d74e2aee9&lang=pl&units=metric`
  } else if(locationType == "city") {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${location},pl&APPID=ba31b757b36851b819d7731d74e2aee9&lang=pl&units=metric`
  }

  return dispatch => {
    axios.get(url)
      .then(response => {
        dispatch(getWeather(response.data))
      })
      .catch(error => {
        throw(error);
      });
  }

  };