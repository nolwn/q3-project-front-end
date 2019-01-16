import mtg from 'mtgsdk';
export const SEARCH_CARDS = "SEARCH_CARDS";

  export function findCards(name) {
    return async (dispatch) => {
        try {
            const response = await mtg.card.where({name, gameFormat:'standard'})
            dispatch({
                type: SEARCH_CARDS,
                payload: response
            })
        } catch (err) {
            console.log(err)
        }
    }
};