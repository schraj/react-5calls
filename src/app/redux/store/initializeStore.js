import * as actions from '../actions/index'
import { logger } from 'loglevel'
import localStore from '../../services/localstorage'

const initializeStore = (store) => {

  // use localStorage directly to set this value *before* bootstrapping the app.
  const isDebug = (localStorage['org.5calls.debug'] === 'true');

  if (isDebug) {
    //logger.setLevel(logger.levels.TRACE, false);
  }

  // get the stored zip location
  let cachedAddress = '';
  localStore.getAll('org.5calls.location', (location) => {
    if (location.length > 0) {
      cachedAddress = location[0]
    }
  });

  // get the stored geo location
  let cachedGeo = '';
  localStore.getAll('org.5calls.geolocation', (geo) => {
    if (geo.length > 0) {
      logger.debug("geo get", geo[0]);
      cachedGeo = geo[0]
    }
  });

  // get the stored geo location
  let cachedAllowBrowserGeo = true;
  localStore.getAll('org.5calls.allow_geolocation', (allowGeo) => {
    if (allowGeo.length > 0) {
      logger.debug("allowGeo get", allowGeo[0]);
      cachedAllowBrowserGeo = allowGeo[0]
    }
  });

  // get the time the geo was last fetched
  let cachedGeoTime = '';
  localStore.getAll('org.5calls.geolocation_time', (geo) => {
    if (geo.length > 0) {
      logger.debug("geo time get", geo[0]);
      cachedGeoTime = geo[0]
    }
  });

  let cachedCity = '';
  localStore.getAll('org.5calls.geolocation_city', (city) => {
    if (city.length > 0) {
      logger.debug("city get", city[0]);
      cachedCity = city[0]
    }
  });

  // get the stored completed issues
  let completedIssues = [];
  localStore.getAll('org.5calls.completed', (completed) => {
    completedIssues = completed == null ? [] : completed;
  });

  // get stored user stats
  const defaultStats = {
    all: [],
    contacted: 0,
    vm: 0,
    unavailable: 0,
  };
  let localStats = defaultStats;
  localStore.getAll('org.5calls.userStats', (stats) => {
    if (stats.length > 0) {
      localStats = stats[0];
    } else {
      localStore.add("org.5calls.userStats", localStats, () => {});
    }
  });

  const remoteData = {
    issues: [],
    activeIssues: [],
    inactiveIssues: [],
    totalCalls: 0,
    splitDistrict: false,
    invalidAddress: false
  }
  store.dispatch(actions.setRemoteData(remoteData));

  let cachedFetchingLocation = (cachedGeo === '') ? true : false;
  let cachedLocationFetchType = (cachedAllowBrowserGeo) ? 'browserGeolocation' : 'ipAddress';

  cachedFetchingLocation = (cachedCity !== '') ? true : cachedFetchingLocation;
  cachedLocationFetchType = (cachedAddress !== '') ? 'address' : cachedLocationFetchType;

  const locationInfo = {
    geolocation: cachedGeo,
    geoCacheTime: cachedGeoTime,
    allowBrowserGeo: cachedAllowBrowserGeo,
    cachedCity: cachedCity,
    cachedAddress: cachedAddress,
    cachedFetchingLocation: cachedFetchingLocation,
    cachedLocationFetchType: cachedLocationFetchType
  }

  store.dispatch(actions.setLocationInfo(locationInfo));

  store.dispatch(actions.setUserStats(localStats));

  const callState = {
    currentIssueId: null,
    contactIndices: {},
    completedIssues: completedIssues
  }
  store.dispatch(actions.setCallState(callState));

  // this needs to be in redux store rather than local state because multiple components will refer to it
  // initially it appeared that it should be in local state.
  store.dispatch(actions.setAskingLocation(false));

  store.dispatch(actions.setIsDebug(isDebug));
}

export default initializeStore