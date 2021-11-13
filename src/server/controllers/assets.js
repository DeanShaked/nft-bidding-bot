const Web3 = require("web3");
const Network = require("opensea-js");
const { OpenSeaPort } = require("opensea-js");
let assetsList = {};

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io");

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
});

const getAssets = async (req, res) => {
  // const {collectionSlug} = req.params

  fetch(
    `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&collection=divineanarchy`,
    { method: "GET" }
  )
    .then((response) => {
      assetsList = response.json();
      console.log(assetsList);
    })
    .catch((err) => console.error(err));
};

module.exports = {
  getAssets: getAssets,
};
