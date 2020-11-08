import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/_actions/counter_actions"

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const handleUP = () => {
    dispatch(increment())
  }
  const handleDOWN = () => {
    dispatch(decrement())
  }

  return (
    <div>
      hello there
      <div>{state.counter.number}</div>
      <button onClick={() => { handleUP() }}>+</button>
      <button onClick={() => { handleDOWN() }}>-</button>
    </div>
  )
}

export default App
