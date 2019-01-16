import mtg from 'mtgsdk';
export const SEARCH_CARDS = "SEARCH_CARDS";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

  export function findCards(name) {
    return async (dispatch) => {
        try {
            const response = await mtg.card.where({name, gameFormat:'standard'})
            console.log(response)
            dispatch({
                type: SEARCH_CARDS,
                payload: response
            })
        } catch (err) {
            console.log(err)
        }
    }
};