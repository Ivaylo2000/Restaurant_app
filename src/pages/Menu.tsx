import React from "react";
import ListComponent from "../components/ListComponent";
import Modal from "../components/Modal";
const Menu: React.FC = () => {
  return (
    <>
      <ListComponent mealtag="pizza" menuItem="Pizzas" />
      <ListComponent mealtag="burger" menuItem="Burgers" />
      <ListComponent mealtag="bbq" menuItem="BBQ" />
      <ListComponent mealtag="dessert" menuItem="Desserts" />
    </>
  );
};

export default Menu;
