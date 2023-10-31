import React from "react";
import MainNavigation from "./components/MainNavigation";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
  },
]);

function App() {
  return (
    <div>
      <MainNavigation />
    </div>
  );
}

export default App;
