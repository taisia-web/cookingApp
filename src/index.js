import './style.css';
import RECIPES from './recipes.js';

const input = document.querySelector('input');
const recipes = document.querySelector('.recipes');

const renderRecipes = (recipe) => {
    recipe.forEach(i => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const name = document.createElement('span');
        name.textContent = i.name;
        div.append(name);
        img.setAttribute('src', i.image);
        div.append(img);
        div.classList.add('recipe');
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
