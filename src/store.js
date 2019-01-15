import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import decks from './reducers/decks';
import cards from './reducers/cards';

//combineReducers
const reducers = combineReducers({cards, decks})

export default createStore(reducers, applyMiddleware(thunk))