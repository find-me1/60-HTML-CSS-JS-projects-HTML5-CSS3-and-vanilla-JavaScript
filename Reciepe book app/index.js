const API_KEY = "465294c4e35c4b168ec74f8c35e7e34b";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
      const recipeItemEl = document.createElement("li");
      recipeItemEl.classList.add("recipe-item");
  
      const recipeImageEl = document.createElement("img");
      recipeImageEl.src = recipe.image;
      recipeImageEl.alt = "recipe image";
  
      const recipeTitleEl = document.createElement("h2");
      recipeTitleEl.innerText = recipe.title;
  
      const recipeIngredientsEl = document.createElement("p");
      recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;
  
      recipeItemEl.appendChild(recipeImageEl);
      recipeItemEl.appendChild(recipeTitleEl);
      recipeItemEl.appendChild(recipeIngredientsEl);
      recipeListEl.appendChild(recipeItemEl);
    });
    recipeListEl = document.createElement
}
async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}

async function init(){
    const getRecipes = await getRecipes();
}
init();