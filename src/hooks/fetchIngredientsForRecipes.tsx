interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
}

export const fetchIngredientsForRecipes = async (
  recipes: Recipe[]
): Promise<Recipe[]> => {
  const apiKey = "091c098ff5a94c6c9c388b26800cb5a9";

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const ingredientsURL = `https://api.spoonacular.com/recipes/${recipe.id}/ingredientWidget.json?apiKey=${apiKey}`;

    try {
      const response = await fetch(ingredientsURL);

      if (response.ok) {
        const data = await response.json();
        if (data.ingredients && Array.isArray(data.ingredients)) {
          recipes[i].ingredients = data.ingredients.map(
            (ingredient: any) => ingredient.name
          );
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
