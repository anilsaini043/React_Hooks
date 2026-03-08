import { useState } from 'react'

const UseState = () => {
    const [ count, setCount ] = useState(0);

    const onIncreaseCount = ()=> {
        setCount(count+1)
    }
  return (
    <>
        <h1>"useState" Hook</h1>
        <h2> ➤ The useState hook in React is used to create and manage state in a functional component.</h2>
        <h3>Current Count : {count}</h3>
        <button onClick={onIncreaseCount}>Increase</button>
    </>
  )
}

export default UseState