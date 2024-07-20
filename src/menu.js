const content = document.querySelector('.content');
const menu = document.querySelector('.menu');

const loadContent = () => {
    menu.classList.add('active');
    content.textContent = '';

    const classes = content.className.split(' ');
    if(classes.length === 2)
        content.classList.remove(classes[1]);

    content.classList.add('menuCss');

    
}

export default loadContent;