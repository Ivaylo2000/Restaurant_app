import { useState, useEffect } from "react";
import { fetchIngredientsForRecipes } from "./fetchingIngredientsForRecipes";
import { fetchRecipesFromApi } from "./fetchRecipesFromApi";
import { Recipe } from "../interface/Recipe";

const useRecipeData = (mealtag: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const basicRecipes = await fetchRecipesFromApi(mealtag);
        const recipesWithIngredients = await fetchIngredientsForRecipes(
          basicRecipes
        );
        setRecipes(recipesWithIngredients);
      } catch (error) {}
    };

    fetchRecipes();
  }, [mealtag]);

  return recipes;
};

export default useRecipeData;
