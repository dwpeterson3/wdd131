var selectElement = document.getElementById('theme-select');

selectElement.addEventListener('change', changeTheme);


function changeTheme() {
    var currentValue = selectElement.value;

    if (currentValue === "dark") {
        document.body.classList.add('dark');

        var logo = document.querySelector('.logo');
        logo.src = "byui-logo_white.png";

    }
    else {
        document.body.classList.remove('dark');
        
        var logo = document.querySelector('.logo');
        logo.src = "byui-logo_blue.webp";
    }
}

const themeSelector = document.getElementById('theme-select');
themeSelector.addEventListener('change', changeTheme);