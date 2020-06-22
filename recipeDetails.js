const details = document.querySelector(".recipe-details");

const renderUI = (data) => {
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
        <h3 class="ingredients-head">Ingredients</h3>
        <ul class="ingredients-list"></ul>
        <div>
          <a class="button" href="${recipe.source_url}">See more</a>
        </div>
    </div>     
          `;
  const renderList = details.querySelector('.ingredients-list')
  recipe.ingredients.forEach((ingredient) => {
    const list = `<li>${ingredient}</li>`;
    renderList.innerHTML += list;
  });
}

addEventListener("DOMContentLoaded", (e) => {
  const search = new URLSearchParams(window.location.search);

  const id = search.get("rId");
  if (id) {
    recipeDets(id)
      .then((data) => renderUI(data))
      .catch((err) => console.log(err));
  }
});
