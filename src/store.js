import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import decks from './reducers/decks';
import cards from './reducers/cards';
import auth from './reducers/authentication';

import decks from './reducers/decks'
import cards from './reducers/cards'
import deckCards from './reducers/deckCards'


//combineReducers
const reducers = combineReducers({auth, cards, decks, deckCards})

export default createStore(reducers, applyMiddleware(thunk, logger))
