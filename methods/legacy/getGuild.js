"use strict";

const fetch = require("../fetch");

module.exports = (guild, config) => {
  return new Promise((resolve, reject) => {
    if (typeof guild !== "string")
      return reject(new TypeError("Invalid guild"));
    let url = `${config.url}/public_api.php?action=guildStats&command=${guild}`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (json.error) return reject(json);
        if (config.removeMeta) delete json.request;
        return resolve(json);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
