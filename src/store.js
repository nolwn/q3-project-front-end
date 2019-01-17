<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import decks from './reducers/decks';
import cards from './reducers/cards';
import auth from './reducers/authentication';
=======
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
>>>>>>> working without redux yet

import decks from './reducers/decks'
import cards from './reducers/cards'
import deckCards from './reducers/deckCards'


//combineReducers
<<<<<<< HEAD
const reducers = combineReducers({auth, cards, decks})
=======
const reducers = combineReducers({cards, decks, deckCards})
>>>>>>> working without redux yet

export default createStore(reducers, applyMiddleware(thunk, logger))

