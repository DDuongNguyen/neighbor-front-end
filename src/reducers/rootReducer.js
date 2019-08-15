import {combineReducers} from
'redux'
import userReducer from './userReducer.js'
import mapReducer from './mapReducer.js'
import eventReducer from './eventReducer.js'


export default combineReducers({
  userReducer,
  eventReducer,
  mapReducer
})
