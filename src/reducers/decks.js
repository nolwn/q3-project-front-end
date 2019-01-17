import {GET_DECKS, CREATE_DECK} from '../actions/decks.js';

const initialState = [

  ];

export default function decks (state = initialState, action) {
    switch(action.type) {
        case GET_DECKS: 
            return action.payload

        case CREATE_DECK:
            console.log(action.payload)
            return [state, {...action.payload}]
        default:
            return state
    }
};