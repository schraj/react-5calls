import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {SET_REMOTE_DATA, SET_ADDRESS, SET_GEOLOCATION_INFO, SET_UISTATE, SET_USERSTATS, SELECT_ISSUE} from '../actions'

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

export const userStats = (state = {}, action) => {
  switch (action.type) {
    case SET_USERSTATS:
      return action.userStats
    default:
      return state
  }
}

export const uiState = (state = {}, action) => {
  switch (action.type) {
    case SET_UISTATE:
      return action.uiState
    case SELECT_ISSUE:
      return {...state, currentIssueId: action.id}
    default:
      return state
  }
}

export const root = combineReducers({
  remoteData,
  address,
  geolocation,
  userStats,
  uiState,
  router: routerReducer
})
