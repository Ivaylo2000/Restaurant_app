import React from "react";
import Button from "./Button";
import useRecipeData from "../hooks/fetchMeals";
import "./ListComponent.css";

interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
}

const ListComponent: React.FC<{ menuItem: string; mealtag: string }> = (
  props
) => {
  const recipes: Recipe[] = useRecipeData(props.mealtag);

  return (
    <div className="MenuContainer">
      <h1>{props.menuItem}</h1>
      <ul className="FoodContainer">
        {recipes.map((recipe: Recipe) => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="ingredients-wrapper">
              <h2>{recipe.title}</h2>
              <div className="meal-wrapper">
                <h3>Ingredients:</h3>
                <p>{recipe.ingredients}</p>

                <div className="button-wrapper">
                  <Button text="Add" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
