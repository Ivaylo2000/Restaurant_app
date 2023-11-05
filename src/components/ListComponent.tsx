import React from "react";
import Button from "./Button";
import useRecipeData from "../hooks/fetchMeals";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import { Recipe } from "../interface/Recipe";
import "./ListComponent.css";

const ListComponent: React.FC<{ menuItem: string; mealtag: string }> = (
  props
) => {
  const recipes: Recipe[] = useRecipeData(props.mealtag);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRecipe, setModalRecipe] = useState<Recipe | null>(null);

  const openModal = (recipe: Recipe) => {
    setModalRecipe(recipe);
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (isModalOpen === true) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="MenuContainer">
        {isModalOpen && (
          <Modal
            title={modalRecipe?.title}
            image={modalRecipe?.image}
            text={modalRecipe?.ingredients}
            onClose={() => {
              setModalRecipe(null);
              setIsModalOpen(false);
            }}
          />
        )}

        <h1>{props.menuItem}</h1>
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
