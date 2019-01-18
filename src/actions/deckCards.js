import axios from 'axios'

export const DECREMENT = 'DECREMENT';
export const INCREMENT = "INCREMENT"
export const DECKCARDS = 'DECKCARDS';

const server = process.env.REACT_APP_API_URL

export const getDeckCards = (userId, deckId) => {
    return async (dispatch) => {
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
    return async (dispatch) => {
            const response = await axios.patch(
                server +
                '/users/' + userId +
                '/decks/' + deckId +
                '/cards/' + cardId +
                '/remove'
            )
            dispatch({ type: DECREMENT, payload: response.data })
    }
};

export const increment = (userId, deckId, cardId) => {
    return async(dispatch) => {
        try {
            const response = await axios.patch(
                server +
                '/users/' + userId +
                '/decks/' + deckId +
                '/cards/' + cardId +
                '/add'
            )
            dispatch({ type: INCREMENT, payload: response.data })
        }catch(err) {
            console.log(err)
        }
    }
};

export const remove = () => {

}
