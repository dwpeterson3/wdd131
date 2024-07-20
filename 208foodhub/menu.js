import menuItems from "./menu-items.js";

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

        hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

const outputElement = document.querySelector(".menu")


menuItems.forEach(object => {
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