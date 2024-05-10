var selectElement = document.getElementById('theme-select');

selectElement.addEventListener('change', changeTheme);


function changeTheme() {
    var currentValue = selectElement.value;

    if (currentValue === "dark") {
        document.body.classList.add('dark');

        var logo = document.querySelector('.logo');
        logo.src = "byui-logo_white.png";

        var h2 = document.querySelector('h2');
        h2.style.color =  "#4f9acf";

    }
    else {
        document.body.classList.remove('dark');
        
        var logo = document.querySelector('.logo');
        logo.src = "byui-logo_blue.webp";

        var h2 = document.querySelector('h2');
        h2.style.color = "#006EB6"
        }
}

const themeSelector = document.getElementById('theme-select');
themeSelector.addEventListener('change', changeTheme);