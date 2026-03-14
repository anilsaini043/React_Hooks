import { useState } from "react"

const useCounterHook = (initialVal = 0) => {
    const [ count, setCount ] = useState(initialVal);

    const increaseCount = ()=>{
        setCount((prev)=> prev + 1)
    }

    const decreaseCount = ()=>{
        setCount((prev)=> prev - 1)
    }

    return { count, increaseCount, decreaseCount }
}

export default useCounterHook