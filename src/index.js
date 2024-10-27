import './style.css';
import RECIPES from './recipes.js';
import createReceipe from './components.js';
import createModal from './window.js';

const input = document.querySelector('input');
const recipes = document.querySelector('.recipes');
const body = document.querySelector('body');

const renderRecipes = (recipe) => {
    recipe.forEach(i => {
        const div = document.createElement('div');
        div.classList.add('recipe');
        div.textContent = i.name;
        recipes.append(div);
    });
}

input.addEventListener('input', (e) => {
    recipes.innerHTML = '';
    const search = e.target.value;
    const data = RECIPES.filter(i => i.name.toLowerCase().startsWith(search.toLowerCase()));
    renderRecipes(data)
});

renderRecipes(RECIPES);
