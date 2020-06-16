const search = document.querySelector("form");
const showRecipe = document.querySelector(".recipe");

const updateUI = (data) => {
  const recipes = data.recipes;
  console.log(data);
  recipes.forEach((recipe) => {
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
          <div>
          <a class="button" href="recipe.html">View Recipe</a>
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

search.addEventListener("submit", (e) => {
  e.preventDefault();

  const recipes = search.recipe.value.trim();
  search.reset();

  viewRecipes(recipes)
    .then((data) => updateUI(data))
    .then((showRecipe.innerHTML = ""))
    .catch((err) => console.log(err));
});
