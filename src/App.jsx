import { Outlet } from "react-router"

import Home from "./pages/Home/home"

function App() {


  return (
    <>
      <Home />
      <Outlet />
    </>
  )
}

export default App
