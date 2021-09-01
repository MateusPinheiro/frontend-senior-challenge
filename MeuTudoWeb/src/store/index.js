import { createStore, combineReducers } from 'redux'
import opportunitiesReducer from './reducers/opportunitiesReducer'

export default createStore(combineReducers({
  opportunities: opportunitiesReducer
}))