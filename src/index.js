import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router';
import configureStore from './app/redux/store/configureStore'
import initializeStore from './app/redux/store/initializeStore'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import MainPage from './app/pages/MainPage';
import CallPage from './app/pages/CallPage';
import DonePage from './app/pages/DonePage';
import AboutPage from './app/pages/AboutPage';
import ImpactPage from './app/pages/ImpactPage';
import MorePage from './app/pages/MorePage';
import * as actions from './app/redux/actions/index'

import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore(history)
initializeStore(store);

const state = store.getState();
// sometimes we trigger this again when reloading mainView, check for issues
if (state.remoteData.activeIssues.length === 0 || (!state.locationInfo.geolocation || state.locationInfo.geolocation === '')) {
  // Check for browser support of geolocation
  if ((state.locationInfo.allowBrowserGeo !== false && navigator.geolocation) &&
    state.locationInfo.locationFetchType === 'browserGeolocation' && state.locationInfo.geolocation === '') {
      store.dispatch(actions.fetchLocationByBrowserGeolocation())
  }
  else if (state.locationInfo.locationFetchType === 'ipAddress' && state.geolocation === '') {
      store.dispatch(actions.fetchLocationByIp())
  }
  else if (state.locationInfo.address !== '' || state.locationInfo.geolocation !== '') {
    store.dispatch(actions.setFetchingLocation(false))
  }
}

// get initial address
let address = ''
if (store.getState().locationInfo){
  address = store.getState().locationInfo.cachedAddress;
}

// initiate the calls to the back end to get the data
store.dispatch(actions.getIssueData(address));
store.dispatch(actions.getReportData());

render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/issue" component={CallPage} />
        <Route path="/done" component={DonePage} />
        <Route path="/impact" component={ImpactPage} />
        <Route path="/more" component={MorePage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
