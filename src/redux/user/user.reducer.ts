import { userActionTypes } from './user.type'

const INITIAL_STATE = {
  fetching: false,
  users: [],
  error: null,
}

const userReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case userActionTypes.fetchUserStart:
      return {
        ...state,
        fetching: true,
      }
    case userActionTypes.fetchUserFailed:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }

    case userActionTypes.fetchUserSuccess:
      return {
        ...state,
        fetching: false,
        users: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
