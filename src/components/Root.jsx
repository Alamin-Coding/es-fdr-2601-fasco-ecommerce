import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "../sections/Footer"


const Root = () => {
  return (
    <div>
       <Header/>
        <Outlet/>
       <Footer/>
    </div>
  )
}

export default Root