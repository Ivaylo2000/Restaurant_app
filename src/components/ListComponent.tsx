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
                {/* <p>{recipe.ingredients.join(", ")}</p> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente repudiandae deleniti repellendus ipsum eaque quas
                  natus voluptas laborum, eos reprehenderit officiis unde totam
                  animi deserunt, dolore optio, omnis cum? Sit.
                </p>
              </div>
              <Button text="Add" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
