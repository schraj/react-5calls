import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {SET_REMOTE_DATA, 
        SET_REPORT_DATA,
        SET_ADDRESS, 
        SET_GEOLOCATION_INFO, 
        SET_UISTATE, 
        SET_USERSTATS, 
        SELECT_ISSUE,
        MOVE_TO_NEXT_CONTACT,
        COMPLETE_ISSUE
      } from '../actions'

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
    default:
      return state
  }
}

export const root = combineReducers({
  remoteData,
  reportData,
  address,
  geolocation,
  userStats,
  uiState,
  router: routerReducer
})
