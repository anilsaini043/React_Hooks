import React, { useContext } from 'react'
import { MyContext } from './CreateContext'

const User = () => {
    const contextData = useContext(MyContext)
  return (
    <>
        <h1>"useContext" Hook</h1>
        <h2> ➤ useContext is a React Hook that lets a component access values from a Context without passing props manually.</h2>

        <hr />
        <h2>My Context or store value-</h2>
        <ul>
            <li>Name : {contextData.name}</li>
            <li>Age : {contextData.age}</li>
            <li>Profession : {contextData.profession}</li>
        </ul>
    </>
  )
}

export default User