document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
});


function setupHamburgerMenu(){
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

        hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

