import { API_URL, PAGE_PER_RESULT } from './config';
import { getJSON } from './helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: PAGE_PER_RESULT, // 10
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

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 10

  return state.search.results.slice(start, end);
};
