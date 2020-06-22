const search = document.querySelector("form");
const showRecipe = document.querySelector(".recipe");
const showResults = document.querySelector(".results");

const updateUI = (data) => {
  const recipes = data.recipes;
  console.log(data);
  showResults.innerHTML = `
      <p>There are ${recipes.length} recipes available</p>
    `;
  recipes.forEach((recipe) => {
    const id = recipe.recipe_id;
    const html = `
    <div class="recipe-card">
     <div class="recipe-card-img-container">
          <img
            class="recipe-card-img"
            src="${recipe.image_url}"
            alt="image"
          />
        </div>
        <div class="title">
          <h4>${recipe.title}</h4>
          </div>
          <div class="publish">
            <p>Published by ${recipe.publisher}</p>
          </div>
          <div>
          <a class="button" href="recipe.html?rId=${id}">View Recipe</a>
          </div>
    </div>      
          `;
    showRecipe.innerHTML += html;
  });
};

const viewRecipes = async (recipe) => {
  const recipes = await getRecipe(recipe);

  return { recipes };
};
// console.log(recipes);

search.addEventListener("submit", (e) => {
  e.preventDefault();

  const recipes = search.recipe.value.trim();
  search.reset();

  viewRecipes(recipes)
    .then((data) => updateUI(data))
    .then((showRecipe.innerHTML = ""))
    .catch((err) => (showRecipe.innerHTML = `Sorry we don't have this recipe`));

  // set localStorage
  localStorage.setItem("recipes", recipes);
});

if (localStorage.getItem("recipes")) {
  viewRecipes(localStorage.getItem("recipes"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
