import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import decks from './reducers/decks';
import cards from './reducers/cards';
import auth from './reducers/authentication';
import logger from 'redux-logger'


//combineReducers
const reducers = combineReducers({auth, cards, decks})

export default createStore(reducers, applyMiddleware(thunk, logger))

