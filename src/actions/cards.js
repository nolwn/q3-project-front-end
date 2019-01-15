import mtg from 'mtgsdk';
export const SEARCH_CARDS = "SEARCH_CARDS";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const findCards = name =>
  async dispatch => {
    const response = await mtg.card.where({name, gameFormat:'standard'})
    dispatch({
      action: SEARCH_CARDS,
      payload: response
    })
  };

  export const showModal = () => {
    return {
        type: SHOW_MODAL,
        payload: true
      }
  }

  export const hideModal = () => {
      return{
          type: HIDE_MODAL,
          payload: false
      }
  }