const fetch = require("node-fetch");
const AbortController = require("abort-controller");

/**
 * Modified fetch command used in requests
 * @param {String} url - The base URL for HTTP requests
 * @param {String} key - The user's API key if provided
 * @param {String} agent - The User Agent of the request
 * @param {Number} timeout - The timeout in seconds for the request
 * @returns {Promise} Promise for node-fetch request
 */

module.exports = (url, key, agent, timeout) => {
  let controller;
  let urlTimeout;
  if (timeout) {
    controller = new AbortController();
    urlTimeout = setTimeout(() => {
      controller.abort();
    }, timeout);
  }
  return new Promise((resolve, reject) => {
    let header = {};
    let signal = null;
    if (agent) header["User-Agent"] = agent;
    if (key) header.apikey = key;
    if (urlTimeout) signal = controller.signal;
    fetch(url, {
      method: "GET",
      headers: header,
      signal,
    })
      .then((res) => {
        if (urlTimeout) clearTimeout(urlTimeout);
        if (res.status === 200) return resolve(res.json());
        return reject(res);
      })
      .catch((err) => {
        if (urlTimeout) clearTimeout(urlTimeout);
        if (err.name === "AbortError") {
          return reject(new Error("Request timed out"));
        }
        return reject(err);
      });
  });
};
