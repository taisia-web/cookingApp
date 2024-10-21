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
    })
    overlay.append(content);
    content.append(span);
    content.append(closeButton);
    return overlay;
}

export default createModal;