"use strict";

const fetch = require("../fetch");

/**
 * Gets the territories object or a single territory
 * @returns territory object
 */

module.exports = (config) => {
  return new Promise((resolve, reject) => {
    let url = `${config.url}/public_api.php?action=territoryList`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (!json.territories) return reject(json);
        if (config.removeMeta) {
          return resolve(json.territories);
        } else {
          return resolve(json);
        }
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
