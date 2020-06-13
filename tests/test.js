const api = require("../index.js");
require("dotenv").config();
const { KEY } = process.env;
const config1 = {
  key: KEY,
  url: "https://api.wynncraft.com",
  agent: `NodeWynn/test`,
  timeout: 20000,
  removeMeta: true,
};
const config2 = {
  timeout: 100,
  removeMeta: false,
};

const shouldLog = false; // For me testing stuff

const NodeWynn = new api(config1);
console.log(NodeWynn);

test({}, "Test with no config");
test(config1, "Test with config 1");
test(config2, "Test with config 2");

async function test(config, final) {
  let success = [];
  let fail = [];
  try {
    let player = await api.getPlayer(
      "8f52f20c-39f6-49a4-b08a-c2232a6b8f60",
      config
    );
    if (shouldLog) console.log(player);
    success.push("player");
  } catch (err) {
    console.error(err);
    fail.push("player");
  }
  try {
    let ingredient = await api.getIngredient("Sought-After Ore", config);
    if (shouldLog) console.log(ingredient);
    success.push("ingredient");
  } catch (err) {
    console.error(err);
    fail.push("ingredient");
  }
  try {
    let recipe = await api.getRecipe("Boots-30-33", config);
    if (shouldLog) console.log(recipe);
    success.push("recipe");
  } catch (err) {
    console.error(err);
    fail.push("recipe");
  }
  try {
    let territory = await api.getTerritories(config);
    if (shouldLog) console.log(territory);
    success.push("territories");
  } catch (err) {
    console.error(err);
    fail.push("territories");
  }
  try {
    let online = await api.getOnline(config);
    if (shouldLog) console.log(online);
    success.push("online");
  } catch (err) {
    console.error(err);
    fail.push("online");
  }
  try {
    let guild = await api.getGuild("Kingdom Foxes", config);
    if (shouldLog) console.log(guild);
    success.push("guild");
  } catch (err) {
    console.error(err);
    fail.push("guild");
  }
  try {
    let item = await api.getItem("Pure", config);
    if (shouldLog) console.log(item);
    success.push("item");
  } catch (err) {
    console.error(err);
    fail.push("item");
  }
  try {
    let lb = await api.getLeaderboards("guild", config);
    if (shouldLog) console.log(lb);
    success.push("leaderboards");
  } catch (err) {
    console.error(err);
    fail.push("leaderboards");
  }
  try {
    let list = await api.getGuildList(config);
    if (shouldLog) console.log(list);
    success.push("guildList");
  } catch (err) {
    console.error(err);
    fail.push("guildList");
  }
  console.log(final, { success, fail });
}
