import React from "react";

import ListComponent from "../components/ListComponent";

const Menu: React.FC = () => {
  return (
    <>
      <ListComponent mealtag="pizza" menuItem="Pizzas" />
      <ListComponent mealtag="burger" menuItem="Burgers" />
      <ListComponent mealtag="bbq" menuItem="BBQ" />
      <ListComponent mealtag="dessert" menuItem="Desserts" />
      {/* <ListComponent mealtag="nonalcohol" menuItem="Non-alcoholic drinks" />
      <ListComponent mealtag="alcohol" menuItem="Alcohol" /> */}
      {/* <ListComponent mealtag="beer" menuItem="Beers" /> */}
    </>
  );
};

export default Menu;
