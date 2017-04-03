import { push } from 'react-router-redux'
import {
  SET_REMOTE_DATA,
  SET_REPORT_DATA,
  SET_LOCATION_INFO,
  SET_LOCATION,
  SET_USERSTATS,
  SET_CALLSTATE,
  SELECT_ISSUE,
  COMPLETE_ISSUE,
  MOVE_TO_NEXT_CONTACT,
  SET_ASKINGLOCATION
} from './actionTypes'
import localStorage from '../../services/localstorage'
import { getIssueData, postReportData } from '../../services/api'

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

export const setAskingLocation = (askingLocation) => ({
  type: SET_ASKINGLOCATION,
  askingLocation: askingLocation
})

export const setLocationAction = (location) => ({
  type: SET_LOCATION,
  location: location
})

export const setLocation = (location) => {
    return (dispatch, getState) => {     
      localStorage.remove('org.5calls.location', () =>{})
      localStorage.add('org.5calls.location', location, () =>{})

      // get new issue data for this new location  
      getIssueData(dispatch, location);

      // enter the new location into the store
      dispatch(setLocationAction(location));

      // indicate that the user is done setting a location
      dispatch(setAskingLocation(false));
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
      // TODO: this currently doesn't actually post
      paramsObject.via = window.location.host === '5calls.org' ? 'web' : 'test';
      postReportData(outcomeType, paramsObject);  

      let state = getState();

      // set user userStats
      let stats = state.userStats;
      stats['all'].push({
        contactid: paramsObject.contactid,
        issueid: paramsObject.issueid,
        result: paramsObject.result,
        time: new Date().valueOf()
      });
      stats[outcomeType] += 1;
      localStorage.replace("org.5calls.userStats", 0, stats, () => {});

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