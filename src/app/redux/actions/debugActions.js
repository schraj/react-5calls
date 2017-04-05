// Development functionality
import * as types from '../constants/types'
import localStorage from '../../services/localstorage'

export const setIsDebug = (isDebug) => ({
  type: types.SET_ISDEBUG,
  isDebug: isDebug
})

export const resetIssuesAction = () => ({
  type: types.RESET_ISSUES
})

export const resetLocationAction = () => ({
  type: types.RESET_LOCATION
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
