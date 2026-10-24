import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

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
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App