const details = document.querySelector(".recipe-details");

const recipeDetails = (data) => {
  const recipe = data;
  details.innerHTML = `
  <div class="picture-container">
          <img
            class="picture-card"
            src="${recipe.image_url}"
            alt="image"
          />
        </div>
    <div class="ingredients">
        <h1>${recipe.title}</h1>
        <h3>By <a href="${recipe.source_url}">${recipe.publisher}</a></h3>
        <ul>
            <li>${recipe.ingredients}</li>
        </ul>
    </div>     
          `;
};

addEventListener("DOMContentLoaded", (e) => {
  const search = new URLSearchParams(window.location.search);

  const id = search.get("rId");
  if (id) {
    recipeDets(id)
      .then((data) => recipeDetails(data))
      .catch((err) => console.log(err));
  }
});
