import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

if (module.hot) {
  module.hot.accept();
}
export const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) {return;}

    //&  Loading Spinner
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    //& Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
    recipeView.renderError('');
  }
};

const controlSearchResults = async function () {
  resultsView.renderSpinner();

  try {
    const query = searchView.getQuery();
    if (!query) {return;}
    await model.loadSearchResult(query);
    resultsView.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
