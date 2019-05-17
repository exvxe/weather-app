const initialState = {
  fetched: ''
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        fetched: action.weather
      }
    default:
        return state
  }
}

export default weatherReducer;