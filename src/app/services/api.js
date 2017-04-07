import axios from 'axios'

const issueUrl = 'https://5calls.org/issues/?address='
const reportUrl = 'https://5calls.org/report'
const ipInfoUrl = 'https://ipinfo.io/json'

export const getIpinfoData = () => {
    return axios.get(ipInfoUrl);
}

export const getIssueData = (address) => {
    return axios.get(issueUrl + address);
}

export const getReportData = () => {
    return axios.get(reportUrl);
}

// NOT CURRENTLY IMPLEMENTED
export const postReportData = (outcomeType, paramsObject) => {
    // create request
    console.log('would have posted here: outcomeType: %o, params: %o', outcomeType, paramsObject);    

    // post
    // axios.post(reportUrl).then((response) => {
    
    // });
}
