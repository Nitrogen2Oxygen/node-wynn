"use strict";

const fetch = require("node-fetch");

/**
 * Gets the current online players or one specific world
 * @param {String} [world=false] - Single world that wants to be returned
 * @returns online players object
 */

module.exports = (world = false) => {
  return new Promise((resolve, reject) => {
    if (world && typeof world !== "string")
      return reject(new TypeError("Invalid territory"));
    fetch("https://api.wynncraft.com/public_api.php?action=onlinePlayers").then(
      (res) => {
        if (res.status !== 200) return reject(res);
        res.json().then((json) => {
          if (world) {
            if (json[world]) return resolve(json[world]);
            return reject(new TypeError("Invalid world"));
          } else {
            return resolve(json);
          }
        });
      }
    );
  });
};
