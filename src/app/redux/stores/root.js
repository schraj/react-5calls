import { combineReducers } from 'redux'
import {SET_REMOTE_DATA, SET_ADDRESS, SET_GEOLOCATION_INFO} from '../actions'

export const remoteData = (state = {}, action) => {
  switch (action.type) {
    case SET_REMOTE_DATA:
      return action.remoteData
    default:
      return state
  }
}

export const geolocation = (state = {}, action) => {
  switch (action.type) {
    case SET_GEOLOCATION_INFO:
      return action.geolocationInfo
    default:
      return state
  }
}

export const address = (state = "", action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return action.address
    default:
      return state
  }
}

export const root = combineReducers({
  remoteData,
  address,
  geolocation
})
