import recipes from "./recipes.mjs"; 

function random(num) {
    return Math.floor(Math.random() * num); 
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum]; 
}

function recipeTemplate(recipe) {
    return `<article class="recipes">
            <section class="image">
                <p class="dish-image">
                    <img src="${recipe.image}" alt="${recipe.description}">
                </p>
            </section>
            <section class="tag">
                ${tagsTemplate(recipe.tags)}
                <h1 class="name">${recipe.name}</h1>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </section>
        </article>
    `;
}

function tagsTemplate(tags){
    if (!tags || tags.length === 0) {
        return ''; 
    }
    let html = '<div class="tags>'; 
    let index = 0; 
    for (let tag of tags) {
        const className = index === 0 ? 'menu-type' : `tag${index + 1}`;
        html += `<p class= "${className}">${tag}</p>`;
        index++;
    }
    html += '</div>';

    return html;

}

function ratingTemplate(rating){
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    
    html += '</span>';
    return html;
}

function renderRecipes(recipes) {
    const outputElement = document.querySelector("#recipe-output"); 
    const recipeHtmlStrings = recipes.map(recipe => recipeTemplate(recipe));
    const allRecipesHtml = recipeHtmlStrings.join('');

    outputElement.innerHTML = allRecipesHtml;
}
function filter(query) {
    return recipes.filter(recipe => {
        const lowercaseQuery = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(lowercaseQuery) ||
            recipe.description.toLowerCase().includes(lowercaseQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(lowercaseQuery))
        );
    }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault(); 
    const searchInput = document.querySelector("#search-input"); 
    const query = searchInput.value.toLowerCase(); 
    const filteredRecipes = filter(query);
    renderRecipes(filteredRecipes); 
}

function init() {

    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]); 

    const searchForm = document.querySelector("#search-form");
    searchForm.addEventListener('submit', searchHandler); 
}


document.addEventListener('DOMContentLoaded', init);