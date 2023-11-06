import React from "react";
import ListComponent from "../components/ListComponent";
import "./Menu.css";
const Menu: React.FC = () => {
  return (
    <div className="menuPageContainer">
      <ListComponent mealtag="pizza" menuItem="Pizzas" />
      <ListComponent mealtag="burger" menuItem="Burgers" />
      <ListComponent mealtag="bbq" menuItem="BBQ" />
      <ListComponent mealtag="dessert" menuItem="Desserts" />
    </div>
  );
};

export default Menu;
