import { combineReducers } from 'redux'
import contacts from './contacts'
import addEditContactDisplay from './addEditContactDisplay'
import map from './map'

export const root = combineReducers({
  contacts,
  addEditContactDisplay,
  map
})
