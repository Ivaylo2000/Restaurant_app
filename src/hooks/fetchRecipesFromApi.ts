import { Recipe } from "../interface/Recipe";

export const fetchRecipesFromApi = async (
  mealtag: string
): Promise<Recipe[]> => {
  const apiKeys = [
    "31c89035133b43c5aacf9ec9c6752090",
    "b60cd8a4904c45a39a6e7edfba7af42d",
    "adf09070c54749deb0d8198b2d94ce8c",
    "3d05fd85dcb84a63bde0186293b12acb",
    "795fe708d8c245e69362a3936b5f74fa",
    "c296ff97a0af48be9e49ecc69188e969",
  ];

  let recipes: Recipe[] = [];

  for (let i = 0; i < apiKeys.length; i++) {
    const apiKey = apiKeys[i];
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${mealtag}&number=10`;

    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();

        if (data.results && Array.isArray(data.results)) {
          recipes = data.results.map((result: any) => ({
            id: result.id.toString(),
            title: result.title,
            image: result.image,
            ingredients: [],
          }));
          break;
        } else {
          console.error("No recipes found in the response.");
        }
      } else {
        console.error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  }

  return recipes;
};
