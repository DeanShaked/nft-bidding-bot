const Web3 = require("web3");
const Network = require("opensea-js");
const { OpenSeaPort } = require("opensea-js");

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io");

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
});

const getAssets = async (req, res) => {
  // const {collectionSlug} = req.params.collectionSlug
};

module.exports = {
  getAssets: getAssets,
};
