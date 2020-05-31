const api = require("../index.js");

test();

async function test() {
  try {
    let player = await api.getPlayer("8f52f20c-39f6-49a4-b08a-c2232a6b8f60");
    console.log(player);
  } catch (err) {
    console.error(err);
  }
  try {
    let ingredient = await api.getIngredient("Sought-After Ore");
    console.log(ingredient);
  } catch (err) {
    console.error(err);
  }
  try {
    let recipe = await api.getRecipe("test");
    console.log(recipe);
  } catch (err) {
    console.error(err);
  }
  try {
    let territory = await api.getTerritories("Lava Lake");
    console.log(territory);
  } catch (err) {
    console.error(err);
  }
}
