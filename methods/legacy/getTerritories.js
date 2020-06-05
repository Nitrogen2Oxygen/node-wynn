"use strict";

const fetch = require("node-fetch");

/**
 * Gets the territories object or a single territory
 * @param {String} [territory=false] - Single territory that wants to be returned
 * @returns territory object
 */

module.exports = (territory = false) => {
  return new Promise((resolve, reject) => {
    if (territory && typeof territory !== "string")
      return reject(new TypeError("Invalid territory"));
    fetch("https://api.wynncraft.com/public_api.php?action=territoryList").then(
      (res) => {
        if (res.status !== 200) return reject(res);
        res.json().then((json) => {
          if (!json.territories) return reject(json);
          if (territory) {
            if (json.territories[territory])
              return resolve(json.territories[territory]);
            return reject(new TypeError("Invalid territory"));
          } else {
            return resolve(json);
          }
        });
      }
    );
  });
};
