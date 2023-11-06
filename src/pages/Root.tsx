import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./Home.css";
const RootLayout = () => {
  return (
    <div className="mainDiv">
      <MainNavigation />
      <Outlet />
    </div>
  );
};
export default RootLayout;
