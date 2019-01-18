import axios from 'axios'

import { convertCost, convertTypes } from '../utilities/utilities'

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

export const addCard = (userId, deckId, cardData) => {
    console.log(userId, deckId, cardData.manaCost)

    console.log(convertCost(cardData.manaCost))
    console.log(convertTypes(cardData.types, cardData.subtypes))

    const body = convertCost(cardData.manaCost)
    body.types = convertTypes(cardData.types, cardData.subtypes)
    body.name = cardData.name
    body.api_id = cardData.id

    console.log(body)

    return async (dispatch) => {
        const response = await axios.post(
            server +
            '/users/' + userId +
            '/decks/' + deckId +
            '/cards/add',
            body
        )

        console.log(response)

        // dispatch()
        // dispatch({ type: ADDDECKCARD, payload: {
        //     response.data.name,
        //     response.data.qty,
        //     response.data.}
        // })

    }
}

export const increment = () => {

}

export const remove = () => {

}
