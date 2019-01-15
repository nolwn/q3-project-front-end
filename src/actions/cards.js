import mtg from 'mtgsdk';
export const SEARCH_CARDS = "SEARCH_CARDS";

export const findCard = name =>
  async dispatch => {
    const response = await mtg.card.where({name, gameFormat:'standard'})
    dispatch({
      action: SEARCH_CARDS,
      payload: response
    })
  };

  export const showModal = () => {
      
  }