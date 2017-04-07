import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as types from '../constants/types'
import { callState } from './callState'

export const remoteData = (state = {}, action) => {
  switch (action.type) {
    case types.SET_REMOTE_DATA:
      return action.remoteData
    default:
      return state
  }
}

export const reportData = (state = {}, action) => {
  switch (action.type) {
    case types.SET_REPORT_DATA:
      return action.reportData
    default:
      return state
  }
}

export const locationInfo = (state = {}, action) => {
  switch (action.type) {
    case types.SET_LOCATION_INFO:
      //let newState = {...state};
      return Object.assign({}, state, action.locationInfo)
    case types.SET_LOCATION:
      return {...state, cachedAddress: action.location} 
    case types.RESET_LOCATION:    
      return {
        geolocation: null,
        geoCacheTime: null,
        allowBrowserGeo: null,
        cachedCity: null,
        cachedAddress: null,
        cachedFetchingLocation: null,
        cachedLocationFetchType: null
      }
    default:
      return state
  }
}

export const userStats = (state = {}, action) => {
  switch (action.type) {
    case types.SET_USERSTATS:
      return action.userStats
    default:
      return state
  }
}

export const locationProcessing = (state = {}, action) => {
  switch (action.type) {
    case types.SET_ASKING_LOCATION:
      return {...state, askingLocation: action.askingLocation}
    case types.SET_FETCHING_LOCATION:
      return {...state, fetchingLocation: action.fetchingLocation}
    default:
      return state
  }
}

export const isDebug = (state = false, action) => {
  switch (action.type) {
    case types.SET_ISDEBUG:
      return action.isDebug
    default:
      return state
  }
}

export const root = combineReducers({
  remoteData,
  reportData,
  locationInfo,
  userStats,
  callState,
  locationProcessing,
  isDebug,  
  router: routerReducer
})
