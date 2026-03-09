import React from 'react'

const CallbackChild = ({handleClick}) => {
  return (
    <div>
        <h2>Child component</h2>
        <button onClick={handleClick}>Click from Child</button>
    </div>
  )
}

export default React.memo(CallbackChild)