import { API_URL } from './config';
import { getJSON } from './helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};
async function loadRecipe(id) {
  try {
    const { data } = await getJSON(`${API_URL}${id}`);

    const { recipe } = data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.sourceUrl,
    };

    console.log(state.recipe);
  } catch (error) {
    console.error(error, '💥💥💥💥');
    throw error;
  }
}

export { loadRecipe };

export const loadSearchResult = async function (query) {
  state.search.query = query;
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(rec => {
      
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (error) {
    throw error;
  }
};
