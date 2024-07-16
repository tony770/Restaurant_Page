import loadContent from './home.js';

const menuBtn = document.querySelector('.menu');
const content = document.getElementById('content');

menuBtn.addEventListener('click', () => {
    content.textContent = '';
    loadContent();
})

