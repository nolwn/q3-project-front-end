import { createStore, combineReducers } from 'redux';
import decks from './reducers/decks';
import cards from './reducers/cards';

//combineReducers
const reducers = combineReducers({cards, decks})

export default createStore(reducers)