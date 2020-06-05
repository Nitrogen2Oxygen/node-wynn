# Node Wynn

An UPDATED Wynncraft Node.js library. This is refactored and modernized JavaScript wrapper from https://github.com/DevChromium/WynnJS.

## Introduction

All information about the Wynncraft API can be found from [here](https://docs.wynncraft.com) including data handling, errors and rate limits. Please make sure to read these docs before submitting an issue.

## Install

Install using npm:

```bash
npm i --save node-wynn
```

or using yarn:

```bash
yarn add node-wynn
```

## Getting Started

You can require the entire package like this:

```js
const NodeWynn = require("node-wynn");
```

Or for ease of use, you can call functions directly like this:

```js
const { getPlayer, getGuild } = require("node-wynn");
```

## Basics

### Example

An example of getting player data from the name "Salted"

```js
let config = {/* Config */}
NodeWynn
  .getPlayer("Salted", config);
  .then((r) => {
    // Handle player data
  })
  .catch((err) => {
    // Handle error
  });

```

### Config

| Key          | Type    | Function                                                | Default Value               |
| ------------ | ------- | ------------------------------------------------------- | --------------------------- |
| `key`        | String  | The API key for getting requests                        | `null`                      |
| `url`        | String  | The base url for handling requests                      | `https://api.wynncraft.com` |
| `agent`      | String  | The User agent of the request                           | `NodeWynn/v{version}`       |
| `timeout`    | Number  | The number of milliseconds before auto timing out       | `20000`                     |
| `removeMeta` | Boolean | Removes none vital information (such as request object) | `false`                     |

## Usage

The base module has various different functions for each API route.

All methods will return a promise. For info on promises, please see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### V2

#### getPlayer

Gets a player's data from their UUID or IGN

```js
NodeWynn
  .getPlayer("Nitrogen2Oxygen", config);
  .then((r) => {
    // Handle player data
  })
  .catch((err) => {
    // Handle error
  });
```

#### getIngredient

Gets an ingredient's info from the name

```js
NodeWynn
  .getIngredient("Sought-After Ore", config);
  .then((r) => {
    // Handle ingredient
  })
  .catch((err) => {
    // Handle error
  });
```

#### getRecipe

Gets a recipe from the name and level range as a string

```js
NodeWynn
  .getRecipe("Boots-30-33", config);
  .then((r) => {
    // Handle recipe
  })
  .catch((err) => {
    // Handle error
  });
```

### Legacy

#### getTerritories

Gets the list of territories and data from them.

```js
NodeWynn
  .getTerritories(config);
  .then((r) => {
    // Handle territories
  })
  .catch((err) => {
    // Handle error
  });
```

#### getOnline

Gets the list of online worlds and the players in them.

```js
NodeWynn
  .getOnline(config);
  .then((r) => {
    // Handle worlds
  })
  .catch((err) => {
    // Handle error
  });
```

#### getItem

Gets item data from the name. Will return an error if no items appear in the search.

```js
NodeWynn
  .getItem("Pure", config);
  .then((r) => {
    // Handle item
  })
  .catch((err) => {
    // Handle error
  });
```

#### getGuild

Gets a guild from the guild name.
WARNING: Using a guild tag WILL NOT WORK.

```js
NodeWynn
  .getGuild("Kingdom Foxes", config);
  .then((r) => {
    // Handle guild
  })
  .catch((err) => {
    // Handle error
  });
```

#### getGuildList

Gets a list of all active guilds

```js
NodeWynn
  .getGuildList(config);
  .then((r) => {
    // Handle guild list
  })
  .catch((err) => {
    // Handle error
  });
```

#### Get Leaderboards

Gets leaderboard data from one of the 3 leaderboards: player, guild and pvp

```js
NodeWynn
  .getLeaderboard(/* player, guild, pvp */, config);
  .then((r) => {
    // Handle guild list
  })
  .catch((err) => {
    // Handle error
  });
```

## Error Handling

An error will be thrown if the data cannot be obtained properly. This can either be caused by an API outage or incorrect inputs.

An example of error handling from getPlayer

```js
const NodeWynn = require("node-wynn");

let player = "beieheieihieeffie";

NodeWynn
  .getPlayer(player);
  .then((r) => {
    return console.log(r);
  })
  .catch((err) =>
    return console.error(err);
  });
  // Will log the response of an error 400
```
