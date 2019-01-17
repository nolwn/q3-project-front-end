import {SET_AUTHENTICATION} from '../actions/authentication'

const initialState = {
    userId: null,
    pending: true
}

export default function auth (state = initialState, action) {
  switch(action.type) {
      case SET_AUTHENTICATION:
        const id = action.payload !== null ? action.payload.id : null
          return {...state, userId: id, pending: false}
      default:
          return state
  }
}
