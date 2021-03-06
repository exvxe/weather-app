const initialState = {
  location: 'Warsaw',
  locationType: 'city'
}

const localizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
    return {
      ...state,
      location: action.location,
      locationType: action.locationType
    }
    default:
        return state
  }
}

export default localizationReducer;