import './style.css';
import RECIPES from './recipes.js';

const input = document.querySelector('input');
const recipes = document.querySelector('.recipes');

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
    const data = RECIPES.filter(i => i.name.toLowerCase().startsWith(search));
    renderRecipes(data)
});

renderRecipes(RECIPES);
