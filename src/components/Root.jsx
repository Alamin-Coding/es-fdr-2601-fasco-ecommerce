import { Outlet } from "react-router"
import Navbar from "./Navbar"


const Root = () => {
  return (
    <div>
       <Navbar/>
        <Outlet/>
        <footer/>
    </div>
  )
}

export default Root