"use strict";

const fetch = require("node-fetch");

/**
 * Gets an ingredient from a name or
 * @param {String} input - Either the UUID or player IGN
 * @returns Promise - Player stats object
 */

module.exports = (ingredient) => {
  return new Promise(async (resolve, reject) => {
    if (typeof ingredient !== "string")
      return reject(new TypeError("Invalid input"));
    let res = await fetch(
      `https://api.wynncraft.com/v2/ingredient/get/${ingredient}`
    );
    if (res.status !== 200) return reject(res);
    let json = await res.json();
    return resolve(json.data[0]);
  });
};
