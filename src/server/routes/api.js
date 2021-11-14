// Imports
const express = require("express");
const { WyvernSchemaName } = require("opensea-js/lib/types");
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
  let limitAllowedMultiply = 1;
  let i = 1;
  let tokenIds = "";
  let promises = [];

  // Iterate through the entire collection,
  while (i < collectionLen + 1) {
    // Each iteration will create a tokenId param that will add up to the amount of requests allowed by OpenSea.
    // Token Ids are used as a query param string containing all the token Id's for the Promise bundle.
    let s = i.toString();
    tokenIds = tokenIds + `token_ids=${s}&`;

    // If the index is equal to to the limit allowed then will make a Promise bundle and add it's data to the assets array .
    if (i === requestsLimitAllowed * limitAllowedMultiply) {
      promises.push(
        fetch(
          `https://api.opensea.io/api/v1/assets?${tokenIds}&order_direction=desc&limit=${requestsLimitAllowed}&offset=0&collection=${collectionSlug}`,
          { method: "GET" }
        )
      );
      // Reset variables for the next cycle.
      tokenIds = "";
      limitAllowedMultiply++;
    }
    i++;
  }
  // Parsing all promises to JSON objects.
  Promise.all(promises)
    .then((values) => {
      return Promise.all(values.map((r) => r.json())); // Turn each response to JSON format.
    })
    .then((values) => {
      // Array init
      const assetsForOffer = [];

      values.map((asset, index) => {
        const bundle = asset.assets;

        for (let i = 0; i < 30; i++) {
          let newAsset = {
            tokenId: "",
            tokenAddress: "",
            schemaName: WyvernSchemaName,
          };
          newAsset.tokenAddress = bundle[i].owner.address;
          newAsset.tokenId = bundle[i].token_id;
          assetsForOffer.push(newAsset);
        }
      });
      res.send(assetsForOffer);
    })
    .catch((err) => console.error(err));
});

module.exports = app;
