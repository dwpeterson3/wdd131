import menuItems from "./menu-items.js";

document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    setupFilterMenu(); 
    displayMenuItems(menuItems); 
});

function setupHamburgerMenu(){
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

        hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

}

function setupFilterMenu() {
    const filterElement = document.querySelector('#menu-filter');

    filterElement.addEventListener('change', () => {
        const filterValue = filterElement.value;
        const filteredItems = filterMenuItems(filterValue);
        displayMenuItems(filteredItems);
    });
}

function filterMenuItems(filter) {
    if (filter === 'all') {
        return menuItems;
    }
    return menuItems.filter(item => item.type === filter); 
}

function displayMenuItems(items) {
    const outputElement = document.querySelector(".menu")
    outputElement.innerHTML = ""; 
    
    items.forEach(object => {
        const smashBurgerPicture = document.createElement('article');
        smashBurgerPicture.classList.add('picture');
    
        const smashBurgerDetails = document.createElement('article');
        smashBurgerDetails.classList.add("details")
    
        const templateSmashburgerPicture = `
            <img src="${object.imgSrc}" alt="${object.imgAlt}">   
        `;
    
        const templateSmashburgerDetails = `
            <p class="item">${object.item}</p>
            <p class="description">${object.description}</p>
            <p class="price">Price: ${object.price}</p>
        `;
        smashBurgerPicture.innerHTML = templateSmashburgerPicture;
        smashBurgerDetails.innerHTML = templateSmashburgerDetails;
    
        outputElement.appendChild(smashBurgerPicture);
        outputElement.appendChild(smashBurgerDetails);
    });

}
