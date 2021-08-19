import { createSelector } from 'reselect'

const counterState = (state: any) => state.counter

export const selectCounterValue = createSelector(
  [counterState],
  (counter) => counter.value
)
