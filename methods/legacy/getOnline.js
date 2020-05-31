"use strict";

const fetch = require("node-fetch");

/**
 * Gets the current online players or one specific world
 * @param {String} [territory=false] - Single territory that wants to be returned
 * @returns territory object
 */

module.exports = (input, world = false) => {
  return new Promise((resolve, reject) => {
    if (world && typeof world !== "string")
      return reject(new TypeError("Invalid territory"));
    fetch(
      "https://api-legacy.wynncraft.com/public_api.php?action=onlinePlayers"
    ).then((res) => {
      if (res.status !== 200) return reject(res);
      res.json().then((json) => {
        if (!json.territories) return reject(json.territories);
        if (world) {
          if (json[world]) return resolve(json[world]);
          return reject(new TypeError("Invalid world"));
        } else {
          return resolve(json);
        }
      });
    });
  });
};
