import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import {root} from './root'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const configureStore = (history) => {

  // Middleware Configuration
  // ======================================================

  // Build the middleware for intercepting and dispatching navigation actions
  const middlewareForRouter = routerMiddleware(history)

  const logger = createLogger();

  const middleware = [thunk, middlewareForRouter, logger];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  let composeEnhancers = compose

  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    root,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  return store;
}

export default configureStore