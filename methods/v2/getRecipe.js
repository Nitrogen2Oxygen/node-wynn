"use strict";

const fetch = require("node-fetch");

/**
 * Gets a recipe from a name
 * @param {String} input - Recipe name
 * @returns Promise for Recipe object
 */

module.exports = (recipe) => {
  return new Promise((resolve, reject) => {
    if (typeof recipe !== "string")
      return reject(new TypeError("Invalid input"));
    fetch(`https://api.wynncraft.com/v2/recipe/get/${recipe}`).then((res) => {
      if (res.status !== 200) return reject(res);
      res.json().then((json) => {
        return resolve(json.data[0]);
      });
    });
  });
};
