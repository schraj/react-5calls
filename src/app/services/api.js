import axios from 'axios'
import { setRemoteData } from '../redux/actions/index'

const issueUrl = 'https://5calls.org/issues/?address=98502'
const reportUrl = 'https://5calls.org/report'

export const getData = (store) => {
    // var request = new Request(issueUrl, {
    //     method: 'GET',
    //     headers: new Headers({
    //         'Content-Type': 'application/json',
    //     }),
    //     mode: 'cors'
    // });

    axios.get(issueUrl).then((response) => {
            const remoteData = {
            issues: response.data.issues,
            activeIssues: response.data.issues,
            inactiveIssues: response.data.issues,
            totalCalls: 0,
            splitDistrict: response.splitDistrict,
            invalidAddress: response.invalidAddress
        }
        store.dispatch(setRemoteData(remoteData));
    });
}

