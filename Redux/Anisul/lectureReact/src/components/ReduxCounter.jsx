import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction'

const ReduxCounter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    const handleReset = () => {
        dispatch(resetCounter())
    }

    

  return (
    <>
      <h1>Counter using REDUX</h1>
      <p>Count : {count}</p>
      <button onClick={handleIncrement}>Increment</button>  
      <button onClick={handleDecrement}>Decrement</button> 
      <button onClick={handleReset}>Reset</button> 
    </>
  )
}

export default ReduxCounter