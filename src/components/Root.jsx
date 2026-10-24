import { Outlet } from "react-router"


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