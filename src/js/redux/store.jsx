import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/combineReducer.js'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducers, middleware);

export default store;
