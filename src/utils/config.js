import * as Web3 from "web3";
import { OpenSeaPort, Network } from "opensea-js";
import { getDefaultProvider } from "ethers";

export const provider = new Web3.providers.HttpProvider(
  "https://kovan.infura.io/v3/6f8f108c5bf44e408d3fb1e9357e2e55"
);

export const ethersConfig = {
  provider: getDefaultProvider("homestead"),
};

export const seaport = new OpenSeaPort(provider, {
  networkName: Network.ethersConfig,
});
