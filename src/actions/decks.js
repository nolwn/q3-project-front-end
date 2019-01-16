import axios from 'axios';
export const GET_DECKS = 'GET_DECKS';
const url = process.env.REACT_APP_API_URL;

export function getDecks(user_id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${url}/users/${user_id}/decks`)
            dispatch({
                type: GET_DECKS,
                payload: response.data.result
            })
        } catch (err) {
            console.log(err)
        }
    }
};