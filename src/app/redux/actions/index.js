import { push } from 'react-router-redux'

import localStorage from '../../services/localstorage'

export const SET_REMOTE_DATA = 'SET_REMOTEDATA'
export const SET_REPORT_DATA = 'SET_REPORTDATA'
export const SET_LOCATION_INFO = 'SET_LOCATION_INFO'
export const SET_LOCATION = 'SET_LOCATION'
export const SET_USERSTATS = 'SET_USERSTATS'
export const SET_CALLSTATE = 'SET_CALLSTATE'

export const SELECT_ISSUE = 'SELECT_ISSUE'
export const COMPLETE_ISSUE = 'COMPLETE_ISSUE'
export const MOVE_TO_NEXT_CONTACT = 'MOVE_TO_NEXT_CONTACT'

// Development functionality
export const SET_DEBUG = 'SET_DEBUG'
// resets local user stats and completed issues
export const RESET_ISSUES = 'RESET_ISSUES'
export const RESET_LOCATION = 'RESET_LOCATION'


export const setRemoteData = (remoteData) => ({
  type: SET_REMOTE_DATA,
  remoteData: remoteData
})

export const setReportData = (reportData) => ({
  type: SET_REPORT_DATA,
  reportData: reportData
})

export const setLocationInfo = (locationInfo) => ({
  type: SET_LOCATION_INFO,
  locationInfo: locationInfo
})

export const setLocationAction = (location) => ({
  type: SET_LOCATION,
  location: location
})

export const setLocation = (location) => {
    return (dispatch, getState) => {     
      localStorage.remove('org.5calls.location', () =>{})
      localStorage.add('org.5calls.location', location, () =>{})
      dispatch(setLocationAction(location));
    };  
}


export const setUserStats = (userStats) => ({
  type: SET_USERSTATS,
  userStats: userStats
})

export const setCallState = (callState) => ({
  type: SET_CALLSTATE,
  callState: callState
})

export const selectIssue = (id) => ({
  type: SELECT_ISSUE,
  id: id
})

export const completeIssue = (id) => ({
  type: COMPLETE_ISSUE,
  id: id
})

export const moveToNextContact = () => ({
  type: MOVE_TO_NEXT_CONTACT,
})

// thunk action creator
export const submitOutcome = (outcomeType, paramsObject) => {
    return (dispatch, getState) => {
      // TODO: here we would post to the report api

      let state = getState();
      let currentIssue = state.remoteData.issues.find((i) => { return i.id === state.callState.currentIssueId });
      let contactIndex = 0;
      if (state.callState.contactIndices[currentIssue.id]){
        contactIndex = state.callState.contactIndices[currentIssue.id];    
      }

      if ((currentIssue.contacts.length -1) === contactIndex){
        // they've just finished their last contactIndex
        
        // persist to local storage the completed issue
        localStorage.add('org.5calls.completed', currentIssue.id, () =>{})

        // update the store
        dispatch(completeIssue(currentIssue.id));

        // navigate
        return dispatch(push('/done'));  
      } else {
        return dispatch(moveToNextContact());  
      }
    };
}

// Development functionality
export const setIsDebug = (isDebug) => ({
  type: SET_DEBUG,
  isDebug: isDebug
})

export const resetIssuesAction = () => ({
  type: RESET_ISSUES
})

export const resetLocationAction = () => ({
  type: RESET_LOCATION
})

export const resetIssues = () => {
    return (dispatch, getState) => {     

      //reset local storage
      localStorage.remove('org.5calls.completed', () =>{})
      localStorage.remove('org.5calls.userStats', () =>{})

      // reset the store
      dispatch(resetIssuesAction());
    };  
}

export const resetLocation = () => {
    return (dispatch, getState) => {     

      //reset local storage
      localStorage.remove("org.5calls.location", () => {});
      localStorage.remove("org.5calls.geolocation", () => {});
      localStorage.remove("org.5calls.geolocation_city", () => {});
      localStorage.remove("org.5calls.geolocation_time", () => {});

      // reset the store
      dispatch(resetLocationAction());
    };  
}
