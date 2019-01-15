import {SEARCH_CARDS} from '../actions/colors.js';

const initialState = [

  ]

export default function cards (state = initialState, action) {
    switch(action.type) {
        case SEARCH_CARDS: 
            const newState = [...state]
            newState[action.payload].selected = !newState[action.payload].selected
            return newState;

        default:
            return state
    }
}

findCard = async (name) => {
    try{
      const response =await mtg.card.where({ name: name, gameFormat: 'standard'});
      this.setState({
        cards: response
      })
    }catch(err) {
      console.log(err)
    }
  }