import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decreaseCounter,
  increaseCounter,
} from '../../redux/counter/counter.action'
import { selectCounterValue } from '../../redux/counter/counter.selector'

export interface HomePageProps {
  count?: number
  increase?: () => void
  decrease?: () => void
}

const HomePage: React.FC<HomePageProps> = () => {
  const count = useSelector(selectCounterValue)
  const dispatch = useDispatch()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p>counter value: {count}</p>
      <div style={{ margin: '10px' }}>
        <Button
          onClick={() => dispatch(increaseCounter())}
          variant='contained'
          color='primary'
        >
          Increase
        </Button>
        <span style={{ margin: '10px' }} />
        <Button
          onClick={() => dispatch(decreaseCounter())}
          variant='contained'
          color='secondary'
        >
          Decrease
        </Button>
      </div>
    </div>
  )
}

export default HomePage
