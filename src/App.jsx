import { Outlet } from "react-router"

import Home from "./pages/Home/home"
import Layout from "./components/Layout/layout"

function App() {


  return (
    <>
      <Outlet />
    </>
  )
}

export default App
