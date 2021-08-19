import { counterActionTypes } from './counter.type'

export const increaseCounter = () => ({
  type: counterActionTypes.increase,
})

export const decreaseCounter = () => ({
  type: counterActionTypes.decrease,
})
