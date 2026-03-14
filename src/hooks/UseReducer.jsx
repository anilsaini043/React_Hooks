import { useReducer } from 'react'

const initialState = {
  count: 0
}

const setReducerFn = (state, action)=>{
  switch(action.type){
    case "increment" :
      return { count : state.count + 1 }
    case "decrement" :
      return { count : state.count -1 }
    default : 
      return state
  }
}

const UseReducer = () => {
    const [ state, dispatch ] = useReducer(setReducerFn, initialState);

  return (
    <>
        <h1>"useReducer" Hook</h1>
        <h2> ➤ In React, useReducer is a Hook used to manage complex state logic in a component.</h2>
        <h3>Current Count : {state.count}</h3>
        <button onClick={()=>dispatch({type: "increment"})}>Increase</button>
        <button onClick={()=>dispatch({type: "decrement"})}>Decrease</button>
    </>
  )
}

export default UseReducer