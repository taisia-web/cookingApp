const createModal = (recipe) => {
  const overlay = document.createElement('div');
  const content = document.createElement('div');
  overlay.classList.add('modal-overlay');
  content.classList.add('modal-content');
  const closeButton = document.createElement('button');
  const span = document.createElement('span');
  span.textContent = recipe.name;
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
      overlay.remove();
  });
  const ingredients = createIngredients(recipe.ingredients);
  overlay.append(content);
  content.append(span);
  content.append(closeButton);
  content.append(ingredients);
  return overlay;
}

const createIngredients = (ingr) => {
  const ul = document.createElement('ul');
  ingr.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i;
    ul.append(li);
  })
  return ul;
}

export default createModal;