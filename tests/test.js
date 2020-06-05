const api = require("../index.js");
const config = {
  key: null,
  url: "https://api.wynncraft.com",
  agent: `NodeWynn/test`,
  timeout: 5000,
  removeMeta: true,
};

test();

async function test() {
  let success = [];
  let fail = [];
  try {
    let player = await api.getPlayer(
      "8f52f20c-39f6-49a4-b08a-c2232a6b8f60",
      config
    );
    console.log(player);
    success.push("player");
  } catch (err) {
    console.error(err);
    fail.push("player");
  }
  try {
    let ingredient = await api.getIngredient("Sought-After Ore", config);
    console.log(ingredient);
    success.push("ingredient");
  } catch (err) {
    console.error(err);
    fail.push("ingredient");
  }
  try {
    let recipe = await api.getRecipe("Boots-30-33", config);
    console.log(recipe);
    success.push("recipe");
  } catch (err) {
    console.error(err);
    fail.push("recipe");
  }
  try {
    let territory = await api.getTerritories(config);
    console.log(territory);
    success.push("territories");
  } catch (err) {
    console.error(err);
    fail.push("territories");
  }
  try {
    let online = await api.getOnline(config);
    console.log(online);
    success.push("online");
  } catch (err) {
    console.error(err);
    fail.push("online");
  }
  try {
    let guild = await api.getGuild("Kingdom Foxes", config);
    console.log(guild);
    success.push("guild");
  } catch (err) {
    console.error(err);
    fail.push("guild");
  }
  try {
    let item = await api.getItem("Pure", config);
    console.log(item);
    success.push("item");
  } catch (err) {
    console.error(err);
    fail.push("item");
  }
  try {
    let lb = await api.getLeaderboards("guild", config);
    console.log(lb);
    success.push("leaderboards");
  } catch (err) {
    console.error(err);
    fail.push("leaderboards");
  }
  try {
    let list = await api.getGuildList(config);
    console.log(list);
    success.push("guildList");
  } catch (err) {
    console.error(err);
    fail.push("guildList");
  }
  console.log({ success, fail });
}
