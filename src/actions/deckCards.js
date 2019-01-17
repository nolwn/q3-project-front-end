import axios from 'axios'

export const DECREMENT = 'DECREMENT'
export const DECKCARDS = 'DECKCARDS'
export const ADDDECKCARD = 'ADDDECKCARD'

const server = process.env.REACT_APP_API_URL

export const getDeckCards = (userId, deckId) => {
    return async (dispatch) => {
        console.log('done')
        const response = await axios.get(
            server +
            '/users/' + userId +
            '/decks/' + deckId +
            '/cards'
        )

        dispatch({ type: DECKCARDS, payload: response.data })
    }
}

export const decrement = (userId, deckId, cardId) => {
    console.log("decrement", userId, deckId, cardId)
    return async (dispatch) => {
        console.log("inner decrement")

            const response = await axios.patch(
                server +
                '/users/' + userId +
                '/decks/' + deckId +
                '/cards/' + cardId +
                '/remove'
            )
            console.log('response', response.data)
            dispatch({ type: DECREMENT, payload: response.data })
    }
}

export const addCard = (userId, deckId, types, api_id, name) => {
    return async (dispatch) => {
        const reponse = await axios.post(
            server +
            '/users/' + userId +
            '/decks/' + deckId +
            'cards/create'
        )
        dispatch({ type: ADDDECKCARD })
    }
}

export const increment = () => {

}

export const remove = () => {

}
