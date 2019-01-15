import {SEARCH_CARDS, SHOW_MODAL, HIDE_MODAL} from '../actions/cards.js';

const initialState = [

  ]

export default function cards (state = initialState, action) {
    switch(action.type) {
        case SEARCH_CARDS: 
            return action.payload
        
        case SHOW_MODAL:
            return action.payload

        case HIDE_MODAL: 
            return action.payload
        default:
            return state
    }
}
