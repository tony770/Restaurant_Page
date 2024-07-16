const content = document.getElementById('content');

const loadContent = () => {
    content.innerHTML = '';
    const img = document.createElement('img');
    img.src = '../ramen.jpg';
    img.alt = 'ramen';

    const div = document.createElement('div');
    div.textContent = 'Brand New Ramen Flavors!!!';

    content.appendChild(img);
    content.appendChild(div);
};

export default loadContent;