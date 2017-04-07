import * as types from '../constants/types'
import * as api from '../../services/api'
import localStorage from '../../services/localstorage'
import { setLocationFromRemoteData, setFetchingLocation } from './index'

export const fetchIssuesRequest = () => ({
  type: types.FETCH_ISSUES_REQUEST,
})

export const fetchIssuesSuccess = () => ({
  type: types.FETCH_ISSUES_SUCCESS,
})

export const fetchIssuesError = () => ({
  type: types.FETCH_ISSUES_ERROR,
})

export const fetchReportRequest = () => ({
  type: types.FETCH_REPORT_REQUEST,
})

export const fetchReportSuccess = () => ({
  type: types.FETCH_REPORT_SUCCESS,
})

export const fetchReportError = () => ({
  type: types.FETCH_REPORT_ERROR,
})

export const setRemoteData = (remoteData) => ({
  type: types.SET_REMOTE_DATA,
  remoteData: remoteData
})

export const setReportData = (reportData) => ({
  type: types.SET_REPORT_DATA,
  reportData: reportData
})

export const getIssueData = (address) => {
  return (dispatch, getState) => {
    dispatch(fetchIssuesRequest());

    api.getIssueData(address)
      .then((response) => {
        dispatch(fetchIssuesSuccess());
        const remoteData = {
          issues: response.data.issues,
          activeIssues: response.data.issues.filter((i) => !i.inactive),
          inactiveIssues: response.data.issues.filter((i) => i.inactive),
          totalCalls: 0,
          splitDistrict: response.data.splitDistrict,
          invalidAddress: response.data.invalidAddress
        }
        dispatch(setRemoteData(remoteData));

        // check to see if city name is set.  it won't be if we used browser geolocation
        let locationInfo = getState().locationInfo;
        let newLocation = response.data.normalizedLocation;     
        if (locationInfo.locationFetchType === 'browserGeolocation' && newLocation){
          dispatch(setLocationFromRemoteData(newLocation));            
          localStorage.replace("org.5calls.geolocation_city", 0, newLocation, () => { });
          // We were waiting for the city name, now we have it, so turn off the spinner
          dispatch(setFetchingLocation(false));
        }

      }, (reason) => {
        dispatch(fetchIssuesError(reason));
      });      
  };
}

export const getReportData = () => {
  return (dispatch, getState) => {
    dispatch(fetchReportRequest());

    api.getReportData()
      .then((response) => {
        const reportData = {
            totalCalls: response.data.count
        }
        dispatch(fetchIssuesSuccess());
        dispatch(setReportData(reportData));
      }, (reason) => {
        dispatch(fetchReportError(reason));
      });      
  };
}

export const fetchTodosRequest = () => ({
  type: 'FETCH_todos_REQUEST',
})

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch('http://example.com/todos')
      .then(res => res.json())
      .then(json => dispatch(fetchIssuesSuccess(json.body)))
      .catch(ex => dispatch(fetchIssuesError(ex)))
  }
}