import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducer from './reducers.js'
const store = createStore(rootReducer, applyMiddleware(logger))
export default store;
