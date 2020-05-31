const fetch = require("node-fetch");

/**
 * Gets a player object from uuid or name
 * @param {String} input - Either the UUID or player IGN
 * @returns Promise - Player stats object
 */

module.exports = (input) => {
  return new Promise((res, rej) => {
    fetch(`https://api.wynncraft.com/v2/player/${input}/stats`)
      .then((r) => r.json())
      .then((body) => {
        if (body.code !== 200) return rej(body);
        if (!body.data[0]) return rej(body);
        return res(body.data[0]);
      });
  });
};
