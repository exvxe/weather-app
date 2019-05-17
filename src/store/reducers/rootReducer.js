import weatherReducer from './weatherReducer'
import placeReducer from './placeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    data: weatherReducer,
	place: placeReducer
})

export default rootReducer;