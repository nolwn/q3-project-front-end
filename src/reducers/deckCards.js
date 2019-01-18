import { INCREMENT, DECREMENT, DECKCARDS, ADDDECKCARD } from '../actions/deckCards'

const deckCards = (state = [], action) => {
    switch (action.type) {
        case DECREMENT:
        {
            const id = action.payload.id
            const qty = action.payload.qty

            const newState = state.slice(0)
            const index = newState.findIndex(card => card.id === id)

            console.log("index", id)


            newState[index].qty = qty

            return newState
        }

        case INCREMENT:
        {
            console.log('id', action)
            const id = action.payload.id
            const qty = action.payload.qty

            const newState = state.slice(0)
            const index = newState.findIndex(card => card.id === id)

            console.log("index", newState[index])


            newState[index].qty = qty

            return newState
        }



        case DECKCARDS:
            return action.payload

        default:
            console.log("state", state)
            return state
    }
}

export default deckCards
