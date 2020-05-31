"use strict";

const fetch = require("node-fetch");

/**
 * Gets an ingredient from a name or
 * @param {String} input - Ingredient name
 * @returns Promise for ingredient object
 */

module.exports = (ingredient) => {
  return new Promise(async (resolve, reject) => {
    if (typeof ingredient !== "string")
      return reject(new TypeError("Invalid input"));
    ingredient = ingredient.replace(" ", "_"); // Error with API, fixed with this command
    let res = await fetch(
      `https://api.wynncraft.com/v2/ingredient/get/${ingredient}`
    );
    if (res.status !== 200) return reject(res);
    let json = await res.json();
    return resolve(json.data[0]);
  });
};
