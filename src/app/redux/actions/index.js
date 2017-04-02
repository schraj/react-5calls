import { push } from 'react-router-redux'

import localStorage from '../../services/localstorage'

export const SET_REMOTE_DATA = 'SET_REMOTEDATA'
export const SET_REPORT_DATA = 'SET_REPORTDATA'
export const SET_ADDRESS = 'SET_ADDRESS'
export const SET_GEOLOCATION_INFO = 'SET_GEOLOCATION_INFO'
export const SET_USERSTATS = 'SET_USERSTATS'
export const SET_UISTATE = 'SET_UISTATE'

export const SELECT_ISSUE = 'SELECT_ISSUE'
export const COMPLETE_ISSUE = 'COMPLETE_ISSUE'
export const MOVE_TO_NEXT_CONTACT = 'MOVE_TO_NEXT_CONTACT'

export const setRemoteData = (remoteData) => ({
  type: SET_REMOTE_DATA,
  remoteData: remoteData
})

export const setReportData = (reportData) => ({
  type: SET_REPORT_DATA,
  reportData: reportData
})

export const setGeolocationInfo = (info) => ({
  type: SET_GEOLOCATION_INFO,
  geolocationInfo: info
})

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  address: address
})

export const setUserStats = (userStats) => ({
  type: SET_USERSTATS,
  userStats: userStats
})

export const setUiState = (uiState) => ({
  type: SET_UISTATE,
  uiState: uiState
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
      let currentIssue = state.remoteData.issues.find((i) => { return i.id === state.uiState.currentIssueId });
      let contactIndex = 0;
      if (state.uiState.contactIndices[currentIssue.id]){
        contactIndex = state.uiState.contactIndices[currentIssue.id];    
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
