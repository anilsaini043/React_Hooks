import { useEffect, useState } from 'react'

const UseEffect = () => {

  const [ count, setCount ] = useState(0);

  // const handleCount = ()=> {
  //   setCount(Math.random(count+1))
  // }

  // useEffect(()=>{
  //   console.log("use effect calling")
  // })

  // useEffect(()=>{
  //   console.log("use effect calling")
  // }, [])

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount((prev)=> prev + 1)
    }, 1000)

    return ()=> clearTimeout(timer)   // Cleanup function
    
  }, [])

  return (
    <>
        <h1>"useEffect" Hook</h1>
        <h2>➤ In React, useEffect is a hook used to run side effects in a functional component.</h2>
        {/* <h3>Count : {count}</h3> */}
        {/* <button onClick={handleCount}>Increase</button> */}
        <h3>Timer : {count}</h3>
    </>
  )
}

export default UseEffect