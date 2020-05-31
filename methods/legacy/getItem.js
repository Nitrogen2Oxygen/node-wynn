"use strict";

const fetch = require("node-fetch");

/**
 * Gets item data from a single item
 * @param {String} [item] - Name of the item
 * @returns item object
 */

module.exports = (item) => {
  return new Promise((resolve, reject) => {
    if (typeof item !== "string") return reject(new TypeError("Invalid item"));
    fetch(
      `https://api-legacy.wynncraft.com/public_api.php?action=itemDB&search=${item}`
    ).then((res) => {
      if (res.status !== 200) return reject(res);
      res.json().then((json) => {
        if (json.items.length < 1) reject(json);
        resolve(json.items[0]);
      });
    });
  });
};
