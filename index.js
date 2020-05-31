"use strict";

/**
 * index.js
 * ==============
 * Returns the main object for the module.
 */

module.exports = {
  // v2
  getPlayer: require("./methods/v2/getPlayer.js"),
  getIngredient: require("./methods/v2/getIngredient.js"),
  getRecipe: require("./methods/v2/getRecipe.js"),
  // Legacy
};
