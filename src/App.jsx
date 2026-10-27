import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/shop",
				element: <ShopPage />,
			},
			{
				path: "/product",
				element: <ProductPage />,
			},
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
