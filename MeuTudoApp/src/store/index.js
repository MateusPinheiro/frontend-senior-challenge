import { createStore, combineReducers } from 'redux'
import homeReducer from './reducers/homeReducer'

export default createStore(combineReducers({
  home: homeReducer
}))