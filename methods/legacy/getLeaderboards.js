"use strict";

const fetch = require("node-fetch");

/**
 * Gets leaderboard data
 * @param {String} [type] - Type of leaderboard: player, guild, pvp
 * @returns leaderboard object
 */

module.exports = (type) => {
  return new Promise((resolve, reject) => {
    if (typeof type !== "string" && !["player", "guild", "pvp"].includes(type))
      return reject(new TypeError("Invalid leaderboard type"));
    fetch(
      `https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=${type}&timeframe=alltime`
    ).then((res) => {
      if (res.status !== 200) return reject(res);
      res.json().then((json) => {
        if (json.data.length < 1) reject(json);
        resolve(json.data);
      });
    });
  });
};
