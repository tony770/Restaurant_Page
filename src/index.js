import home from './home.js';
import menu from './menu.js';
import './style.css';

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu')
const content = document.querySelector('.content');
const buttons = document.querySelectorAll('.navbar button');


document.addEventListener('DOMContentLoaded', () => {
    home();
})

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => {
            if(btn !== button) {
                btn.classList.remove('active');
            }
            button.classList.add('active');
        })
    })
})

homeBtn.addEventListener('click', () => {
    home();
})

menuBtn.addEventListener('click', () => {
    menu();
})

