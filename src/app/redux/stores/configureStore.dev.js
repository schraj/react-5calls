import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist'

import DevTools from '../../DevTools'

import {root} from './root';

const configureStore = preloadedState => {
  const store = createStore(
    root,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    ),
    //autoRehydrate()
  )

  //persistStore(store)

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}

export default configureStore
