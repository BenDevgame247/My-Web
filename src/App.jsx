import { Outlet } from "react-router"

import Layout from "./components/Layout/layout"


function App() {

  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}

export default App
