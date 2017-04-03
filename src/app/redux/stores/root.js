import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {SET_REMOTE_DATA, 
        SET_REPORT_DATA,
        SET_LOCATION_INFO, 
        SET_LOCATION, 
        SET_CALLSTATE,
        SET_DEBUG, 
        SET_USERSTATS, 
        SELECT_ISSUE,
        MOVE_TO_NEXT_CONTACT,
        COMPLETE_ISSUE,
        RESET_ISSUES,
        RESET_LOCATION
      } from '../actions/actionTypes'

export const remoteData = (state = {}, action) => {
  switch (action.type) {
    case SET_REMOTE_DATA:
      return action.remoteData
    default:
      return state
  }
}

export const reportData = (state = {}, action) => {
  switch (action.type) {
    case SET_REPORT_DATA:
      return action.reportData
    default:
      return state
  }
}

export const locationInfo = (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION_INFO:
      return action.locationInfo
    case SET_LOCATION:
      return {...state, cachedAddress: action.location} 
    case RESET_LOCATION:    
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
    case SET_USERSTATS:
      return action.userStats
    default:
      return state
  }
}

export const callState = (state = {}, action) => {
  switch (action.type) {
    case SET_CALLSTATE:
      return action.callState
    case SELECT_ISSUE:
      return {...state, currentIssueId: action.id}
    case MOVE_TO_NEXT_CONTACT:
      let newIndices = {...state.contactIndices};
      if (!newIndices[state.currentIssueId]){
        newIndices[state.currentIssueId] = 1;
      } else {
        newIndices[state.currentIssueId]++;
      }
      return {...state, contactIndices: newIndices}
    case COMPLETE_ISSUE:
      let newCompletedIssues = [...state.completedIssues];
      newCompletedIssues.push(action.id);
      let newState = {...state };
      newState.completedIssues = newCompletedIssues;
      return newState;
    case RESET_ISSUES: {
      return {...state, contactIndices: {}, completedIssues:[], currentIssueId: null}
    }
    default:
      return state
  }
}

export const isDebug = (state = false, action) => {
  switch (action.type) {
    case SET_DEBUG:
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
  isDebug,
  router: routerReducer
})
