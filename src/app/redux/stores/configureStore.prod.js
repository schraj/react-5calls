import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {root} from './root';
import {persistStore, autoRehydrate} from 'redux-persist'

const configureStore = preloadedState => {
  const store = createStore(
    root,
    preloadedState,
    applyMiddleware(thunk),
    autoRehydrate()
  )

  persistStore(store)

  return store
} 

export default configureStore