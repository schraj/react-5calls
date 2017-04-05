import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import {root} from '../reducers/root'
import thunk from 'redux-thunk'

const configureStore = (history) => {

  // Middleware Configuration
  // ======================================================

  // Build the middleware for intercepting and dispatching navigation actions
  const middlewareForRouter = routerMiddleware(history)

  const middleware = [thunk, middlewareForRouter];

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    root,
    applyMiddleware(...middleware)
  )

  return store;
}

export default configureStore