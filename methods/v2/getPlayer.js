"use strict";

const fetch = require("node-fetch");

/**
 * Gets a player object from uuid or name
 * @param {String} input - Either the UUID or player IGN
 * @returns Promise for player stats object
 */

module.exports = (input) => {
  return new Promise((resolve, reject) => {
    if (typeof input !== "string")
      return reject(new TypeError("Invalid input"));
    fetch(`https://api.wynncraft.com/v2/ingredient/get/${input}`).then(
      (res) => {
        if (res.status !== 200) return reject(res);
        res.json().then((json) => {
          return resolve(json.data[0]);
        });
      }
    );
  });
};
