"use strict";

const fetch = require("node-fetch");

/**
 * Gets an ingredient from a name or
 * @param {String} input - Ingredient name
 * @returns Promise for ingredient object
 */

module.exports = (ingredient) => {
  return new Promise((resolve, reject) => {
    if (typeof ingredient !== "string")
      return reject(new TypeError("Invalid input"));
    ingredient = ingredient.replace(" ", "_"); // Error with API, fixed with this command
    fetch(`https://api.wynncraft.com/v2/ingredient/get/${ingredient}`).then(
      (res) => {
        if (res.status !== 200) return reject(res);
        res.json().then((json) => {
          return resolve(json.data[0]);
        });
      }
    );
  });
};
