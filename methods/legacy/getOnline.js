"use strict";

const fetch = require("../fetch");

/**
 * Gets the current online players or one specific world
 * @returns online players object
 */

module.exports = (config = {}) => {
  return new Promise((resolve, reject) => {
    let url = `${config.url}/public_api.php?action=onlinePlayers`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (config.removeMeta) delete json.request;
        return resolve(json);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
