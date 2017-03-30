import { addContact } from '../actions/index' 
import { logger } from "loglevel"

const initializeStore = (store) => {

// use localStorage directly to set this value *before* bootstrapping the app.
const debug = (localStorage['org.5calls.debug'] === 'true');

if (debug) {
  // we don't need loglevel's built-in persistence; we do it ourselves above ^
  logger.setLevel(logger.levels.TRACE, false);
}

// get the stored zip location
let cachedAddress = '';
store.getAll('org.5calls.location', (location) => {
  if (location.length > 0) {
   cachedAddress = location[0]
  }
});

// get the stored geo location
let cachedGeo = '';
store.getAll('org.5calls.geolocation', (geo) => {
  if (geo.length > 0) {
    logger.debug("geo get", geo[0]);
    cachedGeo = geo[0]
  }
});

let cachedFetchingLocation = (cachedGeo === '') ? true : false;

// get the stored geo location
let cachedAllowBrowserGeo = true;
store.getAll('org.5calls.allow_geolocation', (allowGeo) => {
  if (allowGeo.length > 0) {
    logger.debug("allowGeo get", allowGeo[0]);
    cachedAllowBrowserGeo = allowGeo[0]
  }
});

let cachedLocationFetchType = (cachedAllowBrowserGeo) ? 'browserGeolocation' : 'ipAddress';

// get the time the geo was last fetched
let cachedGeoTime = '';
store.getAll('org.5calls.geolocation_time', (geo) => {
  if (geo.length > 0) {
    logger.debug("geo time get", geo[0]);
    cachedGeoTime = geo[0]
  }
});

let cachedCity = '';
store.getAll('org.5calls.geolocation_city', (city) => {
  if (city.length > 0) {
    logger.debug("city get", city[0]);
    cachedCity = city[0]
  }
});

cachedFetchingLocation  = (cachedCity !== '') ? true : cachedFetchingLocation;
cachedLocationFetchType = (cachedAddress !== '') ? 'address' : cachedLocationFetchType;

// get the stored completed issues
let completedIssues = [];
store.getAll('org.5calls.completed', (completed) => {
  completedIssues = completed == null ? [] : completed;
});

let cachedUserLocale = '';
store.getAll('org.5calls.userlocale', (userLocale) => {
  if (userLocale.length > 0) {
    logger.debug("user locale get", userLocale[0]);
    cachedUserLocale = userLocale[0];
  } else {
    const cachedUserLocale = userLocaleDetection(navigator.language || navigator.userLanguage);
    store.add('org.5calls.userlocale', cachedUserLocale, () => {});
  }
});



// get stored user stats
const defaultStats = {
  all: [],
  contacted: 0,
  vm: 0,
  unavailable: 0,
};
let localStats = defaultStats;
store.getAll('org.5calls.userStats', (stats) => {
  if (stats.length > 0) {
    localStats = stats[0];
  } else {
    let impactLink = document.querySelector('#impact__link');
    impactLink.classList.add('hidden');
  }
});

let  storedState = {
    // remote data
    issues: [],
    activeIssues: [],
    inactiveIssues: [],
    totalCalls: 0,
    splitDistrict: false,

    // manual input address
    address: cachedAddress,

    // automatically geolocating
    geolocation: cachedGeo,
    geoCacheTime: cachedGeoTime,
    allowBrowserGeo: cachedAllowBrowserGeo,
    cachedCity: cachedCity,

    // local user stats
    userStats: localStats,

    // view state
    // getInfo: false,
    // activeIssue: false,
    // completeIssue: false,
    askingLocation: false,
    fetchingLocation: cachedFetchingLocation,
    locationFetchType: cachedLocationFetchType,
    contactIndices: {},
    completedIssues: completedIssues,

    showFieldOfficeNumbers: false,

    debug: debug,
  }

  

}
 
export default initializeStore