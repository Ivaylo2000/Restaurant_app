interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
}

export const fetchRecipesFromApi = async (
  mealtag: string
): Promise<Recipe[]> => {
  const apiKey = "091c098ff5a94c6c9c388b26800cb5a9";
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${mealtag}&number=5`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.results && Array.isArray(data.results)) {
      const recipes = data.results.map((result: any) => ({
        id: result.id.toString(),
        title: result.title,
        image: result.image,
        ingredients: [],
      }));
      return recipes;
    } else {
      console.error("No recipes found in the response.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching recipe data:", error);
    throw error;
  }
};
