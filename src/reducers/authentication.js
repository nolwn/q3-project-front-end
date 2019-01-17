import {SET_AUTHENTICATION} from '../actions/authentication'

const initialState = {
    userId: null,
    pending: true
}

export default function auth (state = initialState, action) {
  switch(action.type) {
      case SET_AUTHENTICATION:
          return {...state, userId: action.payload.id, pending: false}
      default:
          return state
  }
}
