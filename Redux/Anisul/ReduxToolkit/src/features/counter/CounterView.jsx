import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment } from './counterSlice'
const CounterView = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
  return (
    <>
        <h2>Count : {count}</h2>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
    </>
  )
}

export default CounterView