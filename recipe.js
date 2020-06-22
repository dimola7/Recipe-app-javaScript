//get recipes
const getRecipe = async (recipe) => {
  const base = "https://forkify-api.herokuapp.com/api/search";
  const query = `?q=${recipe}`;

  const response = await fetch(base + query);
  const data = await response.json();

  const { recipes } = data;
  return recipes;
};

// get specific recipe
const recipeDets = async (id) => {
  const base = "https://forkify-api.herokuapp.com/api/get";
  const query = `?rId=${id}`;

  const response = await fetch(base + query);
  const data = await response.json();

  const { recipe } = data;
  return recipe;
};
