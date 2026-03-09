import React from 'react'

const Child = ({heavyCalculation}) => {
    console.log("Re-rendering child component")
  return (
    <div>
        <p>heavyCalculation in child component: {heavyCalculation}</p>
        Child component should not re-render when heavyCalculation wont update
    </div>
  )
}

export default React.memo(Child)