import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  const mealCategories = ["Burger", "Pizza", "Bbq", "Dessert"];

  return (
    <div className="menu-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Aboutus">About</Link>
        </li>
        <li className="MenuLink">
          <Link to="/Menu">Menu</Link>
          <div className="dropdown-menu">
            <ul>
              <li className="FoodLink">
                <Link to="/Menu">Meals</Link>
                <div className="dropdown-menu-1">
                  <ul>
                    {mealCategories.map((category, index) => (
                      <li key={index}>
                        <Link to={`/Menu/${category}`}>{category}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
