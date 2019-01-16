import {SET_AUTHENTICATION} from '../actions/authentication'

const initialState = {
    userId: null,
    isLoggedIn: false
}

export default function auth (state = initialState, action) {
  switch(action.type) {
      case SET_AUTHENTICATION:
          return {...state, userId: action.payload.id, isLoggedIn: true}
      default:
          return state
  }
}
