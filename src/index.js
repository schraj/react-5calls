/*eslint no-unused-vars: ["warn", {"vars":"local", "varsIgnorePattern": "[iI]gnored" }]*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from './app/AppContainer'
import configureStore from './app/redux/stores/configureStore'
import initializeStore from './app/redux/stores/initializeDevStore'

const store = configureStore()

setTimeout(() => {
  var state = store.getState();
  initializeStore(store)
}, 2000)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
