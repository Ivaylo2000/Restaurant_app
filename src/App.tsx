import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Aboutus from "./pages/Aboutus";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Menu", element: <Menu /> },
      { path: "/Aboutus", element: <Aboutus /> },
      { path: "/Cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
