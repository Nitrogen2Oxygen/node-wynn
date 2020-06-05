"use strict";

const fetch = require("../fetch");

/**
 * Gets item data from a single item
 * @param {String} [item] - Name of the item
 * @returns item object
 */

module.exports = (item, config) => {
  return new Promise((resolve, reject) => {
    if (typeof item !== "string") return reject(new TypeError("Invalid item"));
    let url = `${config.url}/public_api.php?action=itemDB&search=${item}`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (json.items.length < 1) return reject(json);
        if (config.removeMeta) return resolve(json.items[0]);
        return resolve(json);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
