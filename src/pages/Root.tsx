import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

const RootLayout = () => {
  const [isHomepage, setIsHomepage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHomepage(location.pathname === "/");
  }, [location]);

  return (
    <div className={`mainDiv ${isHomepage ? "hideOverflow" : ""}`}>
      <MainNavigation />
      <Outlet />
    </div>
  );
};
export default RootLayout;
