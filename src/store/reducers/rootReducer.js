import weatherReducer from './weatherReducer'
import localizationReducer from './localizationReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    weather: weatherReducer,
	localization: localizationReducer
})

export default rootReducer;