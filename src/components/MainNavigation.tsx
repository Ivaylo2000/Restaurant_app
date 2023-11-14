import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  const mealCategories = ["Burger", "Pizza", "Bbq", "Dessert"];
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="menu-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
          <span
            className={`menuSpan ${showDropdown ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            ▼
          </span>

          <div className={`dropdown-menu ${showDropdown ? "active" : ""}`}>
            <ul>
              {mealCategories.map((category, index) => (
                <li key={index}>
                  <Link onClick={toggleDropdown} to={`/Menu/${category}`}>
                    {category}
                  </Link>
                </li>
              ))}
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
