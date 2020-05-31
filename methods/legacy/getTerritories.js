"use strict";

const fetch = require("node-fetch");

/**
 * Gets the territories object or a single territory
 * @param {String} [territory=false] - Single territory that wants to be returned
 * @returns territory object
 */

module.exports = (input, territory = false) => {
  return new Promise(async (resolve, reject) => {
    if (territory && typeof territory !== "string")
      return reject(new TypeError("Invalid territory"));
    let res = await fetch(
      "https://api-legacy.wynncraft.com/public_api.php?action=territoryList"
    );
    if (res.status !== 200) return reject(res);
    let json = await res.json();
    if (!json.territories) return reject(json.territories);
    if (territory) {
      if (json.territories[territory])
        return resolve(json.territories[territory]);
      return reject(new TypeError("Invalid territory"));
    } else {
      return resolve(json.territories);
    }
  });
};
