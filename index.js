/**
 * @author Nitrogen2Oxygen <https://github.com/Nitrogen2Oxygen>
 * See LICENSE file in root directory for license data
 */

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

function parseConfig(config) {
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
  /**
   * NodeWynn optional constructor for less redundancy.
   */
  constructor(config) {
    this.config = parseConfig(config);
    console.log(this.config);
  }

  /**
   * Class methods will use the config provided in the constructor.
   * Used for less redundancy.
   */
  getPlayer(input) {
    return getPlayer(input, this.config);
  }
  getIngredient(input) {
    return getIngredient(input, this.config);
  }
  getRecipe(input) {
    return getRecipe(input, this.config);
  }
  getTerritories() {
    return getTerritories(this.config);
  }
  getOnline() {
    return getOnline(this.config);
  }
  getGuild(guild) {
    return getGuild(guild, this.config);
  }
  getItem(item) {
    return getItem(item, this.config);
  }
  getLeaderboards(type) {
    return getLeaderboards(type, this.config);
  }
  getGuildList() {
    return getGuildList(this.config);
  }

  /**
   * Static methods for quick requests.
   */
  static getPlayer(input, config = {}) {
    let parsed = parseConfig(config);
    return getPlayer(input, parsed);
  }
  static getIngredient(input, config = {}) {
    let parsed = parseConfig(config);
    return getIngredient(input, parsed);
  }
  static getRecipe(input, config = {}) {
    let parsed = parseConfig(config);
    return getRecipe(input, parsed);
  }
  static getTerritories(config = {}) {
    let parsed = parseConfig(config);
    return getTerritories(parsed);
  }
  static getOnline(config = {}) {
    let parsed = parseConfig(config);
    return getOnline(parsed);
  }
  static getGuild(guild, config = {}) {
    let parsed = parseConfig(config);
    return getGuild(guild, parsed);
  }
  static getItem(item, config = {}) {
    let parsed = parseConfig(config);
    return getItem(item, parsed);
  }
  static getLeaderboards(type, config = {}) {
    let parsed = parseConfig(config);
    return getLeaderboards(type, parsed);
  }
  static getGuildList(config = {}) {
    let parsed = parseConfig(config);
    return getGuildList(parsed);
  }
}

module.exports = NodeWynn;
