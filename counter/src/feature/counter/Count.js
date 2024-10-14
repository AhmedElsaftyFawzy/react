import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByValue } from "./counterSlice"

const Count = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByValue(5))}>+ 5</button>
      </div>
    </div>
  )
}

export default Count
