import anime from 'animejs/lib/anime.es.js';

const createReceipe = (data) =>{
    const div = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');
    name.textContent = data.name;
    div.append(name);
    img.setAttribute('src', data.image);
    div.append(img);
    div.classList.add('recipe');
    anime({
        targets: div,
        opacity:1,
        easing:'linear',
        duration:500
    });
    return div;
}



export default createReceipe;