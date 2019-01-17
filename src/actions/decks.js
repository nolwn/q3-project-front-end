import axios from 'axios';
export const GET_DECKS = 'GET_DECKS';
const url = process.env.REACT_APP_API_URL;

export function getDecks(user_id, fn) {
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
            dispatch({
                type: GET_DECKS,
                payload: response.data.result
            })
        } catch (err) {
            console.log(err);
        }
    }
};