"use strict";

const fetch = require("../fetch");

/**
 * Gets the list of all guilds
 * @returns guild list object
 */

module.exports = (config = {}) => {
  return new Promise((resolve, reject) => {
    let url = `${config.url}/public_api.php?action=guildList`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (!json.guilds) return reject(json);
        if (config.removeMeta) return resolve(json.guilds);
        return resolve(json);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
