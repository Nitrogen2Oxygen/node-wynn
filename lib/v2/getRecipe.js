"use strict";

const fetch = require("../fetch");

module.exports = (recipe, config) => {
  return new Promise((resolve, reject) => {
    if (typeof recipe !== "string")
      return reject(new TypeError("Invalid input"));
    let url = `${config.url}/v2/recipe/get/${recipe}`;
    fetch(url, config.key, config.agent, config.timeout)
      .then((json) => {
        if (config.removeMeta) {
          return resolve(json.data[0]);
        } else {
          return resolve(json);
        }
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
