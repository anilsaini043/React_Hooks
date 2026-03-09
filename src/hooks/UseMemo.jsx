import { useState, useMemo } from "react"

const UseMemo = () => {
  const [ add, setAdd ] = useState(0);
  const [ decrease, setDecrease ] = useState(10)

  const heavyCalculation = ()=>{
    console.log("heavy calculation function calling with every render or update")
    let num = 0;
    for(let i=0; i<=1000000; i++){
      num += i
    }
    // return num;    // without dependency
    return num + add;   // with add dependency
  }
  
  // const cachedValue = useMemo(calculateValue, dependencies)
  // const cachedValueWithoutDepency = useMemo(()=>heavyCalculation(), [])   // also we can pass dependency like useEffect when to render it
  const cachedValueWithDependency = useMemo(()=>heavyCalculation(), [add])

  return (
    <>
        <h1>"useMemo" Hook</h1>
        <h2> ➤ useMemo remembers a value and only recalculates it when needed.</h2>
        <h3>Add : {add}</h3>
        {/* <h3>Heavy calculation without useMemo: {heavyCalculation()}</h3> */}
        {/* <h3>Heavy calculation without dependency : {cachedValueWithoutDepency}</h3> */}
        <h3>Heavy calculation with dependency : {cachedValueWithDependency}</h3>
        <button onClick={()=>setAdd(add+1)}>Add count</button>

        
        <h3>Decrease count : {decrease}</h3>
        <button onClick={()=>setDecrease(decrease-1)}>Minus count</button>
    </>
  )
}

export default UseMemo