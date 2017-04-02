import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import {root} from './root'
import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
// import DevTools from '../../DevTools'

const configureStore = (history) => {
  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(history)

  const store = createStore(
    root,
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store;
}

export default configureStore