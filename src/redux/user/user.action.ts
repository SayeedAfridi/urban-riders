import { userActionTypes } from './user.type'

const fetchUserStart = () => ({
  type: userActionTypes.fetchUserStart,
})

const fetchUserFailed = (error: any) => ({
  type: userActionTypes.fetchUserFailed,
  payload: error,
})

const fetchUserSuccess = (users: any[]) => ({
  type: userActionTypes.fetchUserSuccess,
  payload: users,
})

export const fetchUsersAsyn = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchUserStart())
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      dispatch(fetchUserSuccess(data))
    } catch (error) {
      dispatch(fetchUserFailed(error))
    }
  }
}
