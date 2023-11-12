import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import useRecipeData from "../hooks/fetchMeals";
import Modal from "./Modal";
import { useState } from "react";
import { Recipe } from "../interface/Recipe";
import "./ListComponent.css";
import { addToCart } from "../redux/cart";

interface IListComponentProps {
  menuItem: string;
  mealtag: string;
}

interface IMealInfo {
  id: string;
  image: string;
  title: string;
  ingredients: string[];
}

const ListComponent = ({ mealtag, menuItem }: IListComponentProps) => {
  const recipes: Recipe[] = useRecipeData(mealtag);
  const [isModalOpen, setIsModalOpen] = useState<{
    isOpen: boolean;
    mealInfo: IMealInfo;
  }>({
    isOpen: false,
    mealInfo: {
      id: "",
      image: "",
      title: "",
      ingredients: [],
    },
  });

  const dispatch = useDispatch();
  const handleAddToCart = (
    id: string,
    title: string,
    img: string,
    ingredients: string[]
  ) => {
    dispatch(
      addToCart({
        id,
        title,
        img,
        ingredients,
      })
    );
  };

  return (
    <div className="MenuContainer">
      <h1>{menuItem}</h1>
      <ul className="FoodContainer">
        {recipes.map((recipe: Recipe, index: number) => (
          <>
            <li key={recipe.id}>
              <img
                src={recipe.image}
                alt={recipe.title}
                onClick={() =>
                  setIsModalOpen({
                    isOpen: true,
                    mealInfo: {
                      id: recipe.id,
                      image: recipe.image,
                      title: recipe.title,
                      ingredients: recipe.ingredients,
                    },
                  })
                }
              />
              <div className="ingredients-wrapper">
                <h2>{recipe.title}</h2>
                <div className="meal-wrapper">
                  <h3>Ingredients:</h3>
                  <p>{recipe.ingredients.join(", ")}</p>
                </div>
                <Button
                  text="Add"
                  onClick={() =>
                    handleAddToCart(
                      recipe.id,
                      recipe.title,
                      recipe.image,
                      recipe.ingredients
                    )
                  }
                />
              </div>
              {isModalOpen.isOpen && index === 1 && (
                <Modal
                  id={isModalOpen.mealInfo.id}
                  title={isModalOpen.mealInfo.title}
                  image={isModalOpen.mealInfo.image}
                  text={isModalOpen.mealInfo.ingredients}
                  onAddToCart={handleAddToCart}
                  onClose={() => {
                    setIsModalOpen({
                      isOpen: false,
                      mealInfo: {
                        id: "",
                        image: "",
                        title: "",
                        ingredients: [],
                      },
                    });
                  }}
                />
              )}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
