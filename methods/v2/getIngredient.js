"use strict";

const fetch = require("../fetch");

/**
 * Gets an ingredient from a name or
 * @param {String} input - Ingredient name
 * @returns Promise for ingredient object
 */

module.exports = (ingredient, config = {}) => {
  return new Promise((resolve, reject) => {
    if (typeof ingredient !== "string")
      return reject(new TypeError("Invalid input"));
    ingredient = ingredient.replace(" ", "_"); // Error with API, fixed with this command
    let url = `${config.url}/v2/ingredient/get/${ingredient}`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (config.removeMeta) {
          return resolve(json.data[0]);
        } else {
          return resolve(json);
        }
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
