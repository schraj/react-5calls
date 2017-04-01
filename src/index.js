import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import configureStore from './app/redux/stores/configureStore'
import initializeStore from './app/redux/stores/initializeDevStore'
import { Provider } from 'react-redux';
import Routes from './app/Routes'

const store = configureStore()
initializeStore(store);

render(
  <Provider store={store}>
       <Router routes={Routes} history={browserHistory} />
  </Provider>,

  <Root store={store} />,
  document.getElementById('root')
)
