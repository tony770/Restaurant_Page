import callaSoup from '../assets/appetizers/Calla_Lily_Seafood_Soup.webp';
import sashimi from '../assets/appetizers/Sashimi_Platter.webp';
import jade from '../assets/appetizers/Jade_Parcels.webp';
import pani from '../assets/appetizers/Panipuri.webp';
import conso from '../assets/appetizers/Consomme.webp';
import barbatos from '../assets/main/Barbatos_Ratatouille.webp';
import adeptus from '../assets/main/Adeptus_Temptation.webp';
import invigor from '../assets/main/Invigorating_Kitty_Meal.webp';
import bbq from '../assets/main/Barbeque_Ribs.webp';
import tandoor from '../assets/main/Tandoori_Roast_Chicken.webp';
import fineTea from '../assets/desserts/Fine_Tea_Full_Moon.webp';
import rainbow from '../assets/desserts/Rainbow_Macarons.webp';
import tricolor from '../assets/desserts/Tricolor_Dango.webp';
import sakura from '../assets/desserts/Sakura_Mochi.webp';
import padis from '../assets/desserts/Padisarah_Pudding.webp';
import berry from '../assets/bev/Berry_Mint_Burst.webp';
import fruits from '../assets/bev/Fruits_of_the_Festival.webp';
import rain from '../assets/bev/Rainbow_Aster.webp';
import spark from '../assets/bev/Sparkling_Berry_Juice.webp';

const content = document.querySelector('.content');
const menu = document.querySelector('.menu');

const menuData = [
    {
        category: 'Appetizers',
        items: [
            {
                title: 'Calla Lily Seafood Soup',
                titleClass: 'mondTitle',
                imgSrc: callaSoup,
                description: 'A balanced combination of seafood. The delicacy of crab and mint make for a clear soup, and the calla lily brings it a refreshing taste.',
                className: 'mondstadt'
            },
            {
                title: 'Sashimi Platter',
                titleClass: 'inaTitle',
                imgSrc: sashimi,
                description: 'A seafood dish made using fresh ingredients. The fish and shellfish are cut into pieces and arranged neatly.',
                className: 'inazuma'
            },
            {
                title: 'Jade Parcels',
                titleClass: 'liyueTitle',
                imgSrc: jade,
                description: 'An exquisite-looking dish. The ham\'s sweetness is locked inside the fresh vegetables, drizzled with a spicy broth. Delicious is an understatement.',
                className: 'liyue'
            },
            {
                title: 'Panipuri',
                titleClass: 'sumeTitle',
                imgSrc: pani,
                description: 'An appetizer served with a green dipping sauce. The crispy balls are first deep-fried, then stuffed with a delicious filling through a hole on the top.',
                className: 'sumeru'
            },
            {
                title: 'Consomme',
                titleClass: 'fontTitle',
                imgSrc: conso,
                description: 'A soup with a recipe involving many steps. Mash ingredients, then stew the mash in broth, and finally serve only the clear soup from the stew.',
                className: 'fontaine'
            }
        ]
    },
    {
        category: 'Main Dish',
        items: [
            {
                title: 'Barbatos Ratatouille',
                titleClass: 'mondTitle',
                imgSrc: barbatos,
                description: 'A simple chowder with a long history. The ingredients are similarly traditional and simple.',
                className: 'mondstadt'
            },
            {
                title: 'Adeptus\' Temptation',
                titleClass: 'liyueTitle',
                imgSrc: adeptus,
                description: 'A complex, famous type of Liyue cuisine, in which specially selected ingredients are submerged and slowly bowled into soup stock.',
                className: 'liyue'
            },
            {
                title: 'Invigorating Kitty Meal',
                titleClass: 'inaTitle',
                imgSrc: invigor,
                description: 'This main dish looks rather cute. With Kiminami Anna\'s help, this dish was made with the tastes of the provisional head priestess Neko in mind.',
                className: 'inazuma'
            },
            {
                title: 'Tandoori Roast Chicken',
                titleClass: 'sumeTitle',
                imgSrc: tandoor,
                description: 'A signature chicken dish of Sumeru. The chicken was first marinated with red spices, and then roasted in a tandoor.',
                className: 'sumeru'
            },
            {
                title: 'Barbeque Ribs',
                titleClass: 'fontTitle',
                imgSrc: bbq,
                description: 'A crispy meat dish. Lightly fry the surface of the ribs until they exude a faint aroma, then wrap the crispy exterior with sauce, and finally, grill them slowly on low heat.',
                className: 'fontaine'
            }
        ]
    },
    {
        category: 'Desserts',
        items: [
            {
                title: 'Fine Tea, Full Moon',
                titleClass: 'liyueTitle',
                imgSrc: fineTea,
                description: 'A tea pastry containing egg yolk. The salted yolk is first steamed, then stuffed and wrapped in tea powder-infused dough.',
                className: 'liyue'
            },
            {
                title: 'Sakura Mochi',
                titleClass: 'inaTitle',
                imgSrc: sakura,
                description: 'A delicate and elegant snack. The dark green leaf adds complexity to the overall warm color palette.',
                className: 'inazuma'
            },
            {
                title: 'Rainbow Macarons',
                titleClass: 'fontTitle',
                imgSrc: rainbow,
                description: 'Small, multi-colored round pastries. There\'s a saying in Fontaine that a dessert spread without macarons is like having the many waters bereft of their source.',
                className: 'fontaine'
            },
            {
                title: 'Tricolor Dango',
                titleClass: 'inaTitle',
                imgSrc: tricolor,
                description: 'A soft, glutinous snack. Glutinous rice has been grown into powder and rolled into a ball before being steamed.',
                className: 'inazuma'
            },
            {
                title: 'Padisarah Pudding',
                titleClass: 'sumeTitle',
                imgSrc: padis,
                description: 'Juices are squeezed from the petals of Padisarahs and Sumeru Roses before being mixed with milk, gelatin, sugar, and other ingredients, and then left to solidify.',
                className: 'sumeru'
            }
        ]
    },
    {
        category: 'Beverage',
        items: [
            {
                title: 'Berry & Mint Burst',
                titleClass: 'mondTitle',
                imgSrc: berry,
                description: 'A freshly squeezed, fashionable, and fruity non-alcoholic beverage. A refreshing burst of Mint with Berries to sweeten the deal, it has an exquisite aroma.',
                className: 'mondstadt'
            },
            {
                title: 'Fruits of the Festival',
                titleClass: 'mondTitle',
                imgSrc: fruits,
                description: 'A brightly colored non-alcoholic beverage. Freshly squeezed Sunsettia and Wolfhook juices have been poured into a cup in a specific order.',
                className: 'mondstadt'
            },
            {
                title: 'Sparkling Berry Juice',
                titleClass: 'mondTitle',
                imgSrc: spark,
                description: 'An all-new non-alcoholic beverage. Valberries of varying ripeness add layers of sour-to-sweet to this juice while the cooling sparkling water refreshes the soul.',
                className: 'mondstadt'
            },
            {
                title: 'Rainbow Aster',
                titleClass: 'inaTitle',
                imgSrc: rain,
                description: 'Featured in famous novel "Pretty Please, Kitsune Guuji?", it was brought to life by Sailing Breeze in collab with Yae Publishing House, along with its fascinating flavor.',
                className: 'inazuma'
            }
        ]
    }
];


const loadContent = () => {
    menu.classList.add('active');
    content.textContent = '';

    const classes = content.className.split(' ');
    if(classes.length === 2)
        content.classList.remove(classes[1]);

    content.classList.add('menuCss');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    menuData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add(`${category.category.toLowerCase().replace(' ', '')}Menu`, 'divider');

        const catergoryTitle = document.createElement('h2');
        catergoryTitle.textContent = category.category;
        categoryDiv.appendChild(catergoryTitle);

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');

        category.items.forEach(item => {
            const itemCell = document.createElement('div');
            itemCell.classList.add('itemCell', item.className);

            const itemTitle = document.createElement('h3');
            itemTitle.classList.add('itemTitle', item.titleClass);
            itemTitle.textContent = item.title;

            const itemImg = document.createElement('img');
            itemImg.classList.add('itemImg');
            itemImg.src = item.imgSrc;

            const itemDescription = document.createElement('div');
            itemDescription.classList.add('itemDescription');
            itemDescription.textContent = item.description;

            itemCell.appendChild(itemTitle);
            itemCell.appendChild(itemImg);
            itemCell.appendChild(itemDescription);
            itemContainer.appendChild(itemCell);
        });

        categoryDiv.appendChild(itemContainer);
        menuContainer.appendChild(categoryDiv);
        content.appendChild(menuContainer)
    });
}

export default loadContent;