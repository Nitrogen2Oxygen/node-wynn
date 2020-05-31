"use strict";

const fetch = require("node-fetch");

/**
 * Gets a recipe from a name
 * @param {String} input - Recipe name
 * @returns Promise for Recipe object
 */

module.exports = (recipe) => {
  return new Promise(async (resolve, reject) => {
    if (typeof ingredient !== "string")
      return reject(new TypeError("Invalid input"));
    let res = await fetch(
      `https://api.wynncraft.com/v2/ingredient/get/${recipe}`
    );
    if (res.status !== 200) return reject(res);
    let json = await res.json();
    return resolve(json.data[0]);
  });
};
