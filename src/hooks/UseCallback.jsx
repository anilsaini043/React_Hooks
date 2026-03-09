import { useState, useCallback } from "react"
import CallbackChild from "./CallbackChild"

const UseCallback = () => {
  const [ count, setCount ] = useState(0)

  const handleClick = useCallback(() => {
      console.log("usecall")
    },
    [],
  )
    
  return (
    <>
        <h1>"useCallback" Hook</h1>
        <h2> ➤ useCallback caches a function so React does not recreate it on every render.</h2>
        <hr/><br/>

        <button onClick={()=> setCount(count+1)}>Click : {count}</button>

        <br/><br/>

        <CallbackChild handleClick={handleClick} />

    </>
  )
}

export default UseCallback