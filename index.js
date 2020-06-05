"use strict";
var version = require("./package.json").version;

// v2
const getPlayer = require("./methods/v2/getPlayer.js");
const getIngredient = require("./methods/v2/getIngredient.js");
const getRecipe = require("./methods/v2/getRecipe.js");
// Legacy
const getTerritories = require("./methods/legacy/getTerritories.js");
const getOnline = require("./methods/legacy/getOnline.js");
const getGuild = require("./methods/legacy/getGuild.js");
const getItem = require("./methods/legacy/getItem.js");
const getLeaderboards = require("./methods/legacy/getLeaderboards.js");
const getGuildList = require("./methods/legacy/getGuildList.js");

const defaultConfig = {
  key: null,
  url: "https://api.wynncraft.com",
  agent: `NodeWynn/v${version}`,
  timeout: 20000,
  removeMeta: false,
};
/**
 * index.js
 * ==============
 * The main object for the module.
 */

/**
 * Creates and instance of the new API handler
 * @param {Object} config - Config object for the instance
 */

async function parseConfig(config) {
  let parsedConfig = {};
  parsedConfig.key =
    typeof config.key === "string" ? config.key : defaultConfig.key;
  parsedConfig.url =
    typeof config.url === "string" ? config.url : defaultConfig.url;
  parsedConfig.agent =
    typeof config.agent === "string" ? config.agent : defaultConfig.agent;
  parsedConfig.timeout =
    typeof config.timeout === "number" ? config.timeout : defaultConfig.timeout;
  parsedConfig.removeMeta =
    typeof config.removeMeta === "boolean"
      ? config.removeMeta
      : defaultConfig.removeMeta;
  return parsedConfig;
}

class NodeWynn {
  static async getPlayer(input, config = {}) {
    let parsed = await parseConfig(config);
    return getPlayer(input, parsed);
  }
  static async getIngredient(input, config = {}) {
    let parsed = await parseConfig(config);
    return getIngredient(input, parsed);
  }
  static async getRecipe(input, config = {}) {
    let parsed = await parseConfig(config);
    return getRecipe(input, parsed);
  }
  static async getTerritories(terr, config = {}) {
    let parsed = await parseConfig(config);
    return getTerritories(terr, parsed);
  }
  static async getOnline(world, config = {}) {
    let parsed = await parseConfig(config);
    return getOnline(world, parsed);
  }
  static async getGuild(guild, config = {}) {
    let parsed = await parseConfig(config);
    return getGuild(guild, parsed);
  }
  static async getItem(item, config = {}) {
    let parsed = await parseConfig(config);
    return getItem(item, parsed);
  }
  static async getLeaderboards(type, config = {}) {
    let parsed = await parseConfig(config);
    return getLeaderboards(type, parsed);
  }
  static async getGuildList(config = {}) {
    let parsed = await parseConfig(config);
    return getGuildList(parsed);
  }
}

module.exports = NodeWynn;
