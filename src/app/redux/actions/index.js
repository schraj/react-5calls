import { push } from 'react-router-redux'
import * as types from '../constants/types'
import localStorage from '../../services/localstorage'
import { postReportData } from '../../services/api'
import { resetIssues, resetLocation, setIsDebug } from './debugActions'
import { getIssueData, getReportData, setRemoteData, setReportData, fetchTodos } from './apiActions'
import { setLocationInfo, setAllowBrowserGeolocation, setFetchLocationBy, fetchLocationByBrowserGeolocation, fetchLocationByIp } from './geolocationActions'

export { resetIssues, resetLocation, setIsDebug };
export { getIssueData, getReportData, setRemoteData, setReportData, fetchTodos };
export { setLocationInfo, setAllowBrowserGeolocation, setFetchLocationBy, fetchLocationByBrowserGeolocation, fetchLocationByIp };

export const setAskingLocation = (askingLocation) => ({
  type: types.SET_ASKING_LOCATION,
  askingLocation: askingLocation
})

export const setFetchingLocation = (fetchingLocation) => ({
    type: types.SET_FETCHING_LOCATION,
    fetchingLocation: fetchingLocation
})

export const setLocationAction = (location) => ({
  type: types.SET_LOCATION,
  location: location
})

export const setLocation = (location) => {
    return (dispatch, getState) => {     
      localStorage.remove('org.5calls.location', () =>{})
      localStorage.add('org.5calls.location', location, () =>{})

      // get new issue data for this new location  
      dispatch(getIssueData(location));

      // enter the new location into the store
      dispatch(setLocationAction(location));

      // indicate that the user is done setting a location
      dispatch(setAskingLocation(false));
    };  
}

export const setUserStats = (userStats) => ({
  type: types.SET_USERSTATS,
  userStats: userStats
})

export const setCallState = (callState) => ({
  type: types.SET_CALLSTATE,
  callState: callState
})

export const selectIssue = (id) => ({
  type: types.SELECT_ISSUE,
  id: id
})

export const completeIssue = (id) => ({
  type: types.COMPLETE_ISSUE,
  id: id
})

export const moveToNextContact = () => ({
  type: types.MOVE_TO_NEXT_CONTACT,
})

// thunk action creator
export const submitOutcome = (outcomeType, paramsObject) => {
    return (dispatch, getState) => {
      // TODO: this currently doesn't actually post

      let state = getState();

      // NOTE: we don't record the "skipped" outcome type 
      if (outcomeType === 'callComplete') {
        paramsObject.via = window.location.host === '5calls.org' ? 'web' : 'test';
        postReportData(outcomeType, paramsObject);  

        // set user userStats
        let stats = state.userStats;
        stats['all'].push({
          contactid: paramsObject.contactid,
          issueid: paramsObject.issueid,
          result: paramsObject.result,
          time: new Date().valueOf()
        });
        stats[paramsObject.result] += 1;
        localStorage.replace("org.5calls.userStats", 0, stats, () => {});
      }

      // get the contact index for the current issue and contact they are submitting an outcome for 
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