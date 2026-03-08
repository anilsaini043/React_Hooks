import { useRef, useState } from "react"

const UseRef = () => {
  const [ name, setName ] = useState("Anil")
  const [ count, setCount ] = useState(0)
  const currentRef = useRef();
  const prevCountRef = useRef(0);

  const handleInputChange = (e)=>{
    setName(e.target.value)
  }

  const handleReset = ()=>{
    // currentRef.current.focus()
    currentRef.current.style.color= "red"
  }

  const handleCount = ()=>{
    prevCountRef.current = count
    setCount((prev)=> prev+1)
  }
 
  return (
    <>
        <h1>"useRef" Hook</h1>
        <h2>➤ useRef is used to store a value or reference to an element without re-rendering the component.</h2>
        <input type="text" name="name" ref={currentRef} value={name} placeholder="Enter your name..." onChange={handleInputChange} />
        <button onClick={handleReset}>Reset</button>
        <hr/>
        <h3>Get previous value using useRef</h3>
        <h3>Current count : {count}</h3>
        <h3>Previous count : {prevCountRef.current}</h3>
        <button onClick={handleCount}>Increase count</button>
    </>
  )
}

export default UseRef