
const content = document.querySelector('.content');
const home = document.querySelector('.home');

const loadContent = () => {
    home.classList.add('active');
    content.textContent = '';

    const classes = content.className.split(' ');
    if(classes.length === 2)
        content.classList.remove(classes[1]);

    content.classList.add('homeCss')
}

export default loadContent;