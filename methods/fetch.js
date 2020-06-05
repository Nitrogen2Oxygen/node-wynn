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
    fetch(url, {
      // TODO: Handle API key
      method: "GET",
      headers: {
        "User-Agent": agent,
      },
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
