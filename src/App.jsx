import { Outlet } from "react-router"

import Navbar from "./components/Navbar/navbar"
import Layout from "./components/Layout/layout"

function App() {


  return (
    <Layout>
      <Navbar/>
      <Outlet />
    </Layout>
  )
}

export default App
