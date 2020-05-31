"use strict";

const fetch = require("node-fetch");

/**
 * Gets the territories object or a single territory
 * @param {String} [guild] - Guild to get the data from
 * @returns guild stats object
 */

module.exports = (guild) => {
  return new Promise((resolve, reject) => {
    if (typeof guild !== "string")
      return reject(new TypeError("Invalid guild"));
    fetch(
      `https://api-legacy.wynncraft.com/public_api.php?action=guildStats&command=${guild}`
    ).then((res) => {
      if (res.status !== 200) return reject(res);
      res.json().then((json) => {
        if (json.error) reject(json);
        resolve(json);
      });
    });
  });
};
