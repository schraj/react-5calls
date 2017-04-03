import axios from 'axios'
import { setRemoteData, setReportData } from '../redux/actions/index'

const issueUrl = 'https://5calls.org/issues/?address='
const reportUrl = 'https://5calls.org/report'

export const getIssueData = (dispatch, address) => {
    axios.get(issueUrl + address).then((response) => {
        const remoteData = {
            issues: response.data.issues,
            activeIssues: response.data.issues,
            inactiveIssues: response.data.issues,
            totalCalls: 0,
            splitDistrict: response.data.splitDistrict,
            invalidAddress: response.data.invalidAddress
        }
        dispatch(setRemoteData(remoteData));
    });
}

export const getReportData = (dispatch) => {
    axios.get(reportUrl).then((response) => {
        const reportData = {
            totalCalls: response.data.count
        }
        dispatch(setReportData(reportData));
    });
}

// NOT CURRENTLY IMPLEMENTED
export const postReportData = (outcomeType, paramsObject) => {
    // create request
    console.log('would have posted here: outcomeType: %o, params: %o', outcomeType, paramsObject);    

    // post
    // axios.post(reportUrl).then((response) => {
    
    // });
}
