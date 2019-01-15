export const SEARCH_CARDS = "SEARCH_CARDS";

export function findCard(card) {
    return{
        type: SEARCH_CARDS,
        payload : card
    }
};