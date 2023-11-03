import { useState, useEffect } from "react";
import { fetchIngredientsForRecipes } from "./fetchIngredientsForRecipes";
import { fetchRecipesFromApi } from "./fetchRecipesFromApi";
interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
}

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
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [mealtag]);

  return recipes;
};

export default useRecipeData;
