// Imports
const { default: axios } = require("axios");
const express = require("express");
const { WyvernSchemaName } = require("opensea-js/lib/types");
const app = express.Router();

// Api routes
app.get("/", (req, res) => {
  res.json("Working");
});

app.get("/getAssets/:collectionSlug/:collectionOffset", (req, res) => {
  // Consts init
  const collectionSlug = req.params.collectionSlug;
  const collectionOffset = req.params.collectionOffset;
  const requestsLimitAllowed = 50;
  let promises = [];

  promises.push(
    axios
      .get(
        `https://api.opensea.io/api/v1/assets?&order_direction=asc&limit=${requestsLimitAllowed}&offset=${collectionOffset}&collection=${collectionSlug}`,
        {
          headers: {
            "X-API-KEY": "cc524269636647f9bc9607e87e5f0cf3",
          },
        }
      )
      .then((r) => r.data)
  );

  // Parsing all promises to JSON objects.
  Promise.all(promises)
    .then((values) => {
      // Array init
      let assetsForOffer = [];
      let newAsset = {
        tokenId: "",
        tokenAddress: "",
        schemaName: WyvernSchemaName,
      };

      // Map assets of each promised response.
      values.map((assets) => {
        // Filter into a new array the assets that contain a valid tokenAddress and tokenId along with the token type Schema for future usage.
        assets.assets.filter((asset, index) => {
          newAsset = {
            tokenId: "",
            tokenAddress: "",
            schemaName: WyvernSchemaName,
          };
          newAsset.tokenAddress = asset.owner.address;
          newAsset.tokenId = asset.token_id;
          assetsForOffer.push(newAsset);
        });
      });
      res.send(assetsForOffer);
    })
    .catch((err) => console.log(err));
});

module.exports = app;
