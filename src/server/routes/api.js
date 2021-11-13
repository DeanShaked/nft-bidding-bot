// Imports
const express = require("express");
const app = express.Router();

// Controllers
const assets = require("../controllers/assets");

// Api routes
app.get("/", (req, res) => {
  res.json("Working");
});

app.get("/getAssets/:collectionSlug/:collectionLength", (req, res) => {
  // Consts init
  const collectionLen = req.params.collectionLength;
  const collectionSlug = req.params.collectionSlug;
  const requestsLimitAllowed = 30;
  let limitAllowedMultiple = 1;
  let promises = [];
  let i = 2;

  // Iterate through the entire collection,
  while (i < collectionLen / requestsLimitAllowed) {
    // Token Ids is used as a query param string containing all the token Id's
    let tokenIds = "";

    // If the index is equal to to the limit allowed then we'll make a tokenId's bundle
    if (i === requestsLimitAllowed * limitAllowedMultiple) {
      // Createa a token id
      for (let k = 1; k <= 30; k++) {
        let s = i.toString();
        tokenIds = tokenIds + `token_ids=${s}&`;
      }

      limitAllowedMultiple++;
    }
    promises.push(
      fetch(
        `https://api.opensea.io/api/v1/assets?${tokenIds}&order_direction=desc&limit=${requestsLimitAllowed}&offset=0&collection=${collectionSlug}`,
        { method: "GET" }
      )
    );
    i++;
  }

  // Parsing all promises into JSON objects,
  // Later on, we'll filter to which asset is biddable.
  Promise.all(promises)
    .then((values) => {
      return Promise.all(values.map((r) => r.json())); // Turn each response to JSON format.
    })
    .then((values) => res.send(values)) // Send back to the user the assets list
    .catch((err) => console.error(err));
});

module.exports = app;
