import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import decks from './reducers/decks';
import cards from './reducers/cards';
<<<<<<< HEAD
// import authentication from './reducers/authentication';
=======
import logger from 'redux-logger'
>>>>>>> add view deck page

//combineReducers
const reducers = combineReducers({cards, decks})

export default createStore(reducers, applyMiddleware(thunk, logger))
