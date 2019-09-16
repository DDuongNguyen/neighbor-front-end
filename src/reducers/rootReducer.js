import {combineReducers} from
'redux'
import userReducer from './userReducer.js'
import mapReducer from './mapReducer.js'
import calendarReducer from './calendarReducer.js'
import eventReducer from './eventReducer.js'
import addressReducer from './addressReducer.js'


export default combineReducers({
  userReducer,
  eventReducer,
  mapReducer,
  calendarReducer,
  addressReducer
})
