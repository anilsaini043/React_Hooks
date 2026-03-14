// import UseEffect from "./hooks/UseEffect"
// import UseState from "./hooks/UseState"
// import UseMemo from "./hooks/UseMemo"
// import UseRef from "./hooks/UseRef"

import UseReducer from "./hooks/UseReducer"

// import UseCallback from "./hooks/UseCallback"

// import User from "./hooks/contextHook/User"
// import { MyContext } from "./hooks/contextHook/CreateContext"

function App() {

  // const userData = {
  //   name: "Anil Saini",
  //   age: 30,
  //   profession: "Software Engineer"
  // }

  return (
    <>
      <h1>All About React Hooks</h1>
      <hr/>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <MyContext.Provider value={userData}>
        <User />
      </MyContext.Provider> */}

      {/* <UseCallback /> */}
      <UseReducer />
      
    </>
  )
}

export default App
