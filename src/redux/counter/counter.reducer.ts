import { counterActionTypes } from './counter.type'

const INITIAL_STATE = {
  value: 0,
}

const counterReducer = (
  state: any = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case counterActionTypes.increase:
      return {
        ...state,
        value: state.value + (action.payload || 1),
      }

    case counterActionTypes.decrease:
      return {
        ...state,
        value: state.value - 1,
      }

    default:
      return state
  }
}

export default counterReducer
