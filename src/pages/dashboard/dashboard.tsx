import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAsyn } from '../../redux/user/user.action'
import {
  selectAllUser,
  selectIsUserFetching,
  selectUserError,
} from '../../redux/user/user.selector'

export interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const loading = useSelector(selectIsUserFetching)
  const users = useSelector(selectAllUser)
  const error = useSelector(selectUserError)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchUsersAsyn())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </div>
    )
  }
  if (!loading && error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {error?.message}
      </div>
    )
  }

  return (
    <div>
      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default DashboardPage
