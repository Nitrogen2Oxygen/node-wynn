const api = require("../index.js");

test();

async function test() {
  try {
    let player = await api.getPlayer("8f52f20c-39f6-49a4-b08a-c2232a6b8f60");
    let ingredient = await api.getIngredient("Sought-After Ore");
    let recipe = await api.getRecipe("");
    console.log({
      player,
      ingredient,
      recipe,
    });
  } catch (err) {
    console.error(err);
  }
}
