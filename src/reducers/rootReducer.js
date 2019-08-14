import {combineReducers} from
'redux'
import userReducer from './userReducer.js'
import mapReducer from './mapReducer.js'


export default combineReducers({
  userReducer,
  mapReducer
})
