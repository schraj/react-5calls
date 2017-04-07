import * as types from '../constants/types'
import * as api from '../../services/api'
import localStorage from '../../services/localstorage'
import { getIssueData } from './apiActions'

import { logger } from 'loglevel'

export const setLocationInfo = (locationInfo) => ({
    type: types.SET_LOCATION_INFO,
    locationInfo: locationInfo
})

export const fetchLocationByIpRequest = () => ({
    type: types.FETCH_LOCATIONBYIP_REQUEST,
})

export const fetchLocationByIpSuccess = () => ({
    type: types.FETCH_LOCATIONBYIP_SUCCESS,
})

export const fetchLocationByIpError = () => ({
    type: types.FETCH_LOCATIONBYIP_ERROR,
})

// ipAddress or browserGeolocation
export const setFetchLocationBy = (fetchByType) => ({
    type: types.SET_FETCH_LOCATION_BY,
    fetchBy: fetchByType
})

export const setAllowBrowserGeolocation = (allow) => ({
    type: types.SET_ALLOW_BROWSER_GEOLOCATION,
    allow: allow
})

export const setBrowserGeolocation = (pointLocation) => ({
    type: types.SET_BROWSER_GEOLOCATION,
    pointLocation: pointLocation
})

export const fetchLocationByIp = () => {
    return (dispatch, getState) => {
        dispatch(setFetchLocationBy('ipAddress'));
        dispatch(fetchLocationByIpRequest());

        api.getIpinfoData()
            .then((response) => {
                dispatch(fetchLocationByIpSuccess());
                const geo = response.loc
                const city = response.city
                const time = new Date().valueOf()
                localStorage.replace("org.5calls.geolocation", 0, geo, () => { });
                localStorage.replace("org.5calls.geolocation_city", 0, city, () => { });
                localStorage.replace("org.5calls.geolocation_time", 0, time, () => { });
                const locationInfo = {
                    geolocation: geo,
                    cachedCity: city,
                    geoCacheTime: time,
                    fetchingLocation: false,
                    askingLocation: false
                }
                dispatch(setLocationInfo(locationInfo));

                // get new issue data for this new location  
                dispatch(getIssueData(location));

            }, (reason) => {
                dispatch(fetchLocationByIpError(reason));
            });
    };
}

export const fetchLocationByBrowserGeolocation = () => {
    let geoSuccess = function (position, dispatch, slowResponseTimeout) {
        window.clearTimeout(slowResponseTimeout);
        if (typeof position.coords !== 'undefined') {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            if (lat && long) {
                let geo = Math.floor(lat * 10000) / 10000 + ',' + Math.floor(long * 10000) / 10000;
                dispatch(setAllowBrowserGeolocation(true));
                dispatch(setBrowserGeolocation(geo));
            } else {
                logger.warn("Error: bad browser location results");
                dispatch(setFetchLocationBy('ipAddress'));
            }
        } else {
            logger.warn("Error: bad browser location results");
            dispatch(setFetchLocationBy('ipAddress'));
        }
    }
    let geoError = function (error, slowResponseTimeout) {
        window.clearTimeout(slowResponseTimeout);

        // We need the most current state, so we need another effect call.
        //send('handleBrowserLocationError', error, done)
        logger.warn("Error with browser location (code: " + error.code + ")");
    }
    let handleSlowResponse = function (dispatch) {
        dispatch(setFetchLocationBy('ipAddress'));
    }

    return (dispatch, getState) => {
        // let boundSuccess = dispatch.bind(this, dispatch);
        // let boundError = dispatch.bind(this, slowResponseTimeout);
        
        // If necessary, this prompts a permission dialog in the browser.
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

        // Sometimes, the user ignores the prompt or the browser does not
        // provide a response when they do not permit browser location.
        // After 5s, try IP-based location, but let browser-based continue.
        let slowResponseTimeout = window.setTimeout(handleSlowResponse, 5000);
    }
}
