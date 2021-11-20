// Imports
const { default: axios } = require("axios");
const express = require("express");
const { WyvernSchemaName } = require("opensea-js/lib/types");
const app = express.Router();

// Etherium Network
const { OpenSeaPort, Network } = require("opensea-js");
const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io");

const seaport = new OpenSeaPort(provider, {
  networkName: Network.provider,
});

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

app.post("/makeOffers", async (req, res) => {
  const assetsList = req.body.assetsList;
  const accountAddress = req.body.accountAddress;
  let promises = [];

  promises.push(
    await seaport
      .createBuyOrder({
        asset: {
          tokenId: "1144",
          tokenAddress: "0xdc51a1f6e6dd40296ea02ffdf9dd7750a2417be1",
          schemaName: WyvernSchemaName,
        },
        accountAddress: accountAddress,
        startAmount: 0.0001,
        // Optional expiration time for the order, in Unix time (seconds):
        expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * 24), // One day from now
      })
      .then((r) => console.log(r.tokenId))
      .catch((err) => console.error(err))
  );
  Promise.all(promises)
    .then((values) => res.send(values))
    .catch((err) => console.error(err));
});

module.exports = app;
