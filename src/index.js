import './style.css';
import RECIPES from './recipes.js';
import createReceipe from './components.js';
import createModal from './window.js';

const input = document.querySelector('input');
const recipes = document.querySelector('.recipes');
const body = document.querySelector('body');
const nav = document.querySelector('nav');

const renderRecipes = (recipesData) => {
    recipes.innerHTML = '';
    recipesData.forEach(recipe => {
        const componentRecipe = createReceipe(recipe);
        recipes.append(componentRecipe);
        componentRecipe.addEventListener('click', () => {
            const modal = createModal(recipe);
            body.append(modal);
        })
    });
}

const searchRecipes = (search, type=false) => {
  if (type) {
    const data = RECIPES.filter(i => i.type === search);
    renderRecipes(data);
  } else {
    const data = RECIPES.filter(i => i.name.toLowerCase().startsWith(search.toLowerCase()));
    renderRecipes(data);
  }
}

input.addEventListener('input', (e) => {
    recipes.innerHTML = '';
    const search = e.target.value;
    searchRecipes(search);
});


nav.addEventListener('click', (e) => {
  if (e.target.dataset.item === 'btn') {
    console.log(e.target.dataset.type)
    const data = e.target.dataset.type;
    searchRecipes(data, true);
  }
})


renderRecipes(RECIPES);
