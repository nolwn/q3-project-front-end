import axios from 'axios';
export const GET_DECKS = 'GET_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
const url = process.env.REACT_APP_API_URL;

export function getDecks(user_id) {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios(`${url}/users/${user_id}/decks`,
            {
                method: "get",
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${token}`
                }
              });
              console.log(response)
            dispatch({
                type: GET_DECKS,
                payload: response.data.result
            })
        } catch (err) {
            console.log(err);
        }
    }
};

export function createDeck(deck_name, deck_wins, deck_losses, user_id) {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios(`${url}/users/${user_id}/decks`,
            {
                method: "post",
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                data: {
                    deckName: deck_name,
                    wins: deck_wins,
                    losses: deck_losses
                }
              });
            dispatch({
                type: GET_DECKS,
                payload: response.data.result
            })
        } catch (err) {
            console.log(err);
        }
    }
};