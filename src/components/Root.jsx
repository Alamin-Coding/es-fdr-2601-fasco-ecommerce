import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "../sections/Footer"


const Root = () => {
  return (
    <div>
       <Navbar/>
        <Outlet/>
       <Footer/>
    </div>
  )
}

export default Root