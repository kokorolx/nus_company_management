import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import rootReducer from './reducers.js'
export default createStore(rootReducer, applyMiddleware(logger, thunk))
