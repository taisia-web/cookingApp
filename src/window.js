const createModal = (recipe) => {
  const overlay = document.createElement('div');
  const content = document.createElement('div');
  overlay.classList.add('modal-overlay');
  content.classList.add('modal-content');
  
  const headerModal = document.createElement('div');
  headerModal.classList.add('header-modal');
  const closeButton = document.createElement('button');
  const span = document.createElement('span');
  span.textContent = recipe.name;

  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
      overlay.remove();
  });
  overlay.addEventListener('click', (e)=>{
    console.log(e.target)
    if (e.target.className === 'modal-overlay'){
      overlay.remove()
    }
  })


  headerModal.append(span);
  headerModal.append(closeButton);
  

  const ingredients = createIngredients(recipe.ingredients);
  overlay.append(content);
  content.append(headerModal);
  content.append(ingredients);
  return overlay;
}

const createIngredients = (ingr) => {
  const ul = document.createElement('ul');
  ingr.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i[0].toUpperCase()+i.slice(1);
    ul.append(li);
  })
  ul.classList.add('list-ingr');
  return ul;
}

export default createModal;