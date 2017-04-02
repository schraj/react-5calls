import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router';
import configureStore from './app/redux/stores/configureStore'
import initializeStore from './app/redux/stores/initializeDevStore'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import MainPage from './app/pages/MainPage';
import CallPage from './app/pages/CallPage';
import DonePage from './app/pages/DonePage';
import AboutPage from './app/pages/AboutPage';

import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore(history)
initializeStore(store);

render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={AboutPage}/>
        <Route path="/issue" component={CallPage}/>
        <Route path="/done" component={DonePage}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
