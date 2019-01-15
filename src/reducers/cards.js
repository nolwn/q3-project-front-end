import {SEARCH_CARDS} from '../actions/colors.js';

const initialState = [

  ]

export default function cards (state = initialState, action) {
    switch(action.type) {
        case SEARCH_CARDS: 
            return action.payload
        default:
            return state
    }
}
