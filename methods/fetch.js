const fetch = require("node-fetch");

module.exports = (url, key, agent, timeout) => {
  let didTimeout = false;
  return new Promise((resolve, reject) => {
    let urlTimeout;
    if (timeout)
      urlTimeout = setTimeout(function () {
        didTimeout = true;
        reject(new Error("Request timed out"));
      }, timeout);
    let header = {};
    if (agent) header["User-Agent"] = agent;
    if (key) header.apikey = key;
    fetch(url, {
      method: "GET",
      headers: header,
    })
      .then((res) => {
        clearTimeout(urlTimeout);
        if (!didTimeout) {
          if (res.status === 200) resolve(res.json());
          reject(res);
        }
      })
      .catch((err) => {
        if (didTimeout) return;
        reject(err);
      });
  });
};
