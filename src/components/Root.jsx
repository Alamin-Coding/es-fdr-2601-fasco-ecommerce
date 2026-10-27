import { Outlet } from "react-router"
import Navbar from "./Navbar"


const Root = () => {
  return (
    <div>
        <nav>Navbar</nav>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default Root