import * as types from './types'
import * as api from '../../services/api'

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