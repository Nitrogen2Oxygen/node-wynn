"use strict";

const fetch = require("../fetch");

module.exports = (type, config) => {
  return new Promise((resolve, reject) => {
    if (typeof type !== "string" && !["player", "guild", "pvp"].includes(type))
      return reject(new TypeError("Invalid leaderboard type"));
    let url = `${config.url}/public_api.php?action=statsLeaderboard&type=${type}&timeframe=alltime`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (json.data.length < 1) return reject(json);
        if (config.removeMeta) return resolve(json.data);
        return resolve(json);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
