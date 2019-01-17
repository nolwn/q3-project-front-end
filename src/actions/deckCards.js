import axios from 'axios'

export const DECREMENT = 'DECREMENT'

const server = process.env.REACT_APP_API_URL

export const decrement = (userId, deckId, cardId) => {
    return async (dispatch) => {
        const response = await axios.patch(
            server +
            '/users/' + userId +
            '/decks/' + cardId +
            '/remove'
        )
        dispatch({ action: DECREMENT, payload: response })
    }
}

export const increment = () => {

}

export const remove = () => {

}
