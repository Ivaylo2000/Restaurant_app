import React from "react";
import "./MainNavigation.css";

const MainNavigation = () => {
  const Meals = ["Burger", "Pizza", "BBQ", "Dessert"];
  const Drinks = ["Beer", "Non-alcoholic", "Alcoholic drinks"];

  return (
    <div className="menu-bar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us </a>
        </li>
        <li className="MenuLink">
          <a href="#">Menu </a>
          <div className="dropdown-menu">
            <ul>
              <li className="FoodLink">
                <a href="#">Meals</a>
                <div className="dropdown-menu-1">
                  <ul>
                    {Meals.map((meal, index) => (
                      <li key={index}>
                        <a href={meal}>{meal}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="DrinkLink">
                <a href="#">Drinks </a>
                <div className="dropdown-menu-1">
                  <ul>
                    {Drinks.map((drink, index) => (
                      <li key={index}>
                        <a href={drink}>{drink}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
