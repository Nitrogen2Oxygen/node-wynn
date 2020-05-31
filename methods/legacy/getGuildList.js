"use strict";

const fetch = require("node-fetch");

/**
 * Gets the list of all guilds
 * @returns guild list object
 */

module.exports = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://api-legacy.wynncraft.com/public_api.php?action=guildList"
    ).then((res) => {
      if (res.status !== 200) return reject(res);
      res.json().then((json) => {
        if (!json.guilds) return reject(json);
        return resolve(json.guilds);
      });
    });
  });
};
