import { createSelector } from 'reselect'

const userState = (state: any) => state.user

export const selectAllUser = createSelector([userState], (user) => user.users)

export const selectIsUserFetching = createSelector(
  [userState],
  (user) => user.fetching
)

export const selectUserError = createSelector([userState], (user) => user.error)
