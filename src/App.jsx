import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Checkout from "./pages/cheakout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/shop',
        element: <ShopPage/>
      },
      {
        path:'/cheakout',
        element: <Checkout/>
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App