import { Recipe } from "../interface/Recipe";

export const fetchIngredientsForRecipes = async (
  recipes: Recipe[]
): Promise<Recipe[]> => {
  const apiKey = "795fe708d8c245e69362a3936b5f74fa";

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const ingredientsURL = `https://api.spoonacular.com/recipes/${recipe.id}/ingredientWidget.json?apiKey=${apiKey}`;

    try {
      const response = await fetch(ingredientsURL);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.ingredients && Array.isArray(data.ingredients)) {
          recipes[i].ingredients = data.ingredients
            .slice(0, 10)
            .map((ingredient: any) => ingredient.name);
        }
      } else {
        console.error(
          `Error fetching ingredients for recipe with ID ${recipe.id}`
        );
      }
    } catch (error) {
      console.error(
        `Error fetching ingredients for recipe with ID ${recipe.id}:`,
        error
      );
    }
  }

  return recipes;
};