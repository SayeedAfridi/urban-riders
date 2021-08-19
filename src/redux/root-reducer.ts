import { combineReducers } from 'redux'
import counterReducer from './counter/counter.reducer'
import testReducer from './test/test.reducer'
import userReducer from './user/user.reducer'

export const rootReducer = combineReducers({
  counter: counterReducer,
  test: testReducer,
  user: userReducer,
})
