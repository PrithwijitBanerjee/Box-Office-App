import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import AppTitle from "./AppTitle"

const MainLayouts = () => {
  return (
        <>
            <AppTitle/>
            <Navbar/>
            <Outlet/>
        </>
  )
}

export default MainLayouts