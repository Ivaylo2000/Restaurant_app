import { Provider } from "react-redux";
import store from "./redux/cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Menu", element: <Menu /> },
      { path: "/Menu/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />{" "}
    </Provider>
  );
}

export default App;
