import NavBar from "../components/headerComponents/NavBar"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
