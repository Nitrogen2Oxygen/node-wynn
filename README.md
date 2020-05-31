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
const nodeWynn = require("node-wynn");
```

Or for ease of use, you can call functions directly like this:

```js
const { getPlayer, getGuild } = require("node-wynn");
```

## Usage

The base module has various different functions for each API route.

All methods will return a promise. For info on promises, please see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### V2

#### getPlayer

Gets a player's data from their UUID or IGN

```js
nodeWynn
  .getPlayer("Nitrogen2Oxygen");
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
nodeWynn
  .getIngredient("Sought-After Ore");
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
nodeWynn
  .getRecipe("Boots-30-33");
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
OPTIONAL: Input a specific territory name to only get data from that territory

```js
nodeWynn
  .getTerritories(/* Optional single territory input */);
  .then((r) => {
    // Handle territories
  })
  .catch((err) => {
    // Handle error
  });
```

#### getOnline

Gets the list of online worlds and the players in them.
OPTIONAL: Input a specific world to only get data from that world.

```js
nodeWynn
  .getOnline(/* Optional world input */);
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
nodeWynn
  .getItem("Pure");
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
nodeWynn
  .getGuild("Kingdom Foxes");
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
nodeWynn
  .getGuildList();
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
nodeWynn
  .getLeaderboard(/* player, guild, pvp */);
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
const nodeWynn = require("node-wynn");

let player = "beieheieihieeffie";

nodeWynn
  .getPlayer(player);
  .then((r) => {
    return console.log(r);
  })
    return console.error(err);
  });
  // Will log the response of an error 400
```
