import React from "react";
import Button from "./Button";
import useRecipeData from "../hooks/fetchMeals";
import Modal from "./Modal";
import { useState } from "react";
import { Recipe } from "../interface/Recipe";
import "./ListComponent.css";

const initialRecipe = { id: "", image: "", title: "", ingredients: [] };

interface IListComponentProps {
  menuItem: string;
  mealtag: string;
}

const ListComponent = ({ mealtag, menuItem }: IListComponentProps) => {
  const recipes: Recipe[] = useRecipeData(mealtag);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRecipe, setModalRecipe] = useState<Recipe>(initialRecipe);

  const openModal = (recipe: Recipe) => {
    setModalRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="MenuContainer">
        {isModalOpen && (
          <Modal
            title={modalRecipe.title}
            image={modalRecipe.image}
            text={modalRecipe.ingredients}
            onClose={() => {
              setModalRecipe(initialRecipe);
              setIsModalOpen(false);
            }}
          />
        )}

        <h1>{menuItem}</h1>
        <ul className="FoodContainer">
          {recipes.map((recipe: Recipe) => (
            <li key={recipe.id}>
              <img
                src={recipe.image}
                alt={recipe.title}
                onClick={() => openModal(recipe)}
              />
              <div className="ingredients-wrapper">
                <h2>{recipe.title}</h2>
                <div className="meal-wrapper">
                  <h3>Ingredients:</h3>
                  {/* <p>{recipe.ingredients.join(", ")}</p> */}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente repudiandae deleniti repellendus ipsum eaque quas
                  </p>
                </div>
                <Button text="Add" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListComponent;
