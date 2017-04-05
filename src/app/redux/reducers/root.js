import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as types from '../actions/types'

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
      return action.locationInfo
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

export const callState = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CALLSTATE:
      return action.callState
    case types.SELECT_ISSUE:
      return {...state, currentIssueId: action.id}
    case types.MOVE_TO_NEXT_CONTACT:
      let newIndices = {...state.contactIndices};
      if (!newIndices[state.currentIssueId]){
        newIndices[state.currentIssueId] = 1;
      } else {
        newIndices[state.currentIssueId]++;
      }
      return {...state, contactIndices: newIndices}
    case types.COMPLETE_ISSUE:
      let newCompletedIssues = [...state.completedIssues];
      newCompletedIssues.push(action.id);
      let newState = {...state };
      newState.completedIssues = newCompletedIssues;
      return newState;
    case types.RESET_ISSUES: {
      return {...state, contactIndices: {}, completedIssues:[], currentIssueId: null}
    }
    default:
      return state
  }
}

export const locationProcessing = (state = {}, action) => {
  switch (action.type) {
    case types.SET_ASKINGLOCATION:
      return {...state, askingLocation: action.askingLocation}
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
