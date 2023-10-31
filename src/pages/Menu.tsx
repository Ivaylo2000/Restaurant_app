import React, { useState, useEffect } from "react";
import "./Menu.css";

interface Meal {
  id: string;
  tag: string;
  img: string;
  ingredients: string;
}

const Menu: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const apiUrl =
      "https://restaurantapp-7125a-default-rtdb.firebaseio.com/meals.json";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setMeals(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="MenuContainer">
      {meals.map((meal) => (
        <div key={meal.id}>
          <h1>{meal.tag}</h1>
          <ul className="FoodContainer">
            <li>
              <img src={meal.img} alt={meal.tag} />
              <strong className="ingredientswrapper">
                <h2>Ingredients</h2>
                <p>{meal.ingredients}</p>
              </strong>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
