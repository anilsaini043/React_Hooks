import React from 'react'
import useCounterHook from './useCounterHook'

const Counter = () => {
    const { count, increaseCount, decreaseCount } = useCounterHook(10)    // without parameter
    // const { count, increaseCount, decreaseCount } = useCounterHook() // without parameter
  return (
    <div>
        <h2>Cutome Hook : In React, a Custom Hook is a JavaScript function that uses React hooks and allows you to reuse logic across multiple components.</h2>
        <h2>Count : {count}</h2>
        <button onClick={increaseCount}>Increament</button>
        <button onClick={decreaseCount}>Increament</button>
    </div>
  )
}

export default Counter