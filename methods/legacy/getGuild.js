"use strict";

const fetch = require("../fetch");

/**
 * Gets guild info from a guild name
 * @param {String} [guild] - Guild to get the data from
 * @returns guild stats object
 */

module.exports = (guild, config) => {
  return new Promise((resolve, reject) => {
    if (typeof guild !== "string")
      return reject(new TypeError("Invalid guild"));
    let url = `${config.url}/public_api.php?action=guildStats&command=${guild}`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (json.error) reject(json);
        if (config.removeMeta) delete json.request;
        resolve(json);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
