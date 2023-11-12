import { Recipe } from "../interface/Recipe";

export const fetchIngredientsForRecipes = async (
  recipes: Recipe[]
): Promise<Recipe[]> => {
  const apiKeys = [
    "2ec38606eb984156923612296506ccb5",
    "787018d693a44f939992d2cb4027334f",
    "31c89035133b43c5aacf9ec9c6752090",
    "b60cd8a4904c45a39a6e7edfba7af42d",
    "adf09070c54749deb0d8198b2d94ce8c",
    "3d05fd85dcb84a63bde0186293b12acb",
    "795fe708d8c245e69362a3936b5f74fa",
    "c296ff97a0af48be9e49ecc69188e969",
  ];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    let success = false;

    for (let j = 0; j < apiKeys.length; j++) {
      const ingredientsURL = `https://api.spoonacular.com/recipes/${recipe.id}/ingredientWidget.json?apiKey=${apiKeys[j]}`;

      try {
        const response = await fetch(ingredientsURL);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data.ingredients && Array.isArray(data.ingredients)) {
            recipes[i].ingredients = data.ingredients
              .slice(0, 7)
              .map((ingredient: any) => ingredient.name);
            success = true;
            break;
          }
        }
      } catch (error) {}
    }
  }

  return recipes;
};
