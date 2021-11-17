import { OpenSeaPort, Network } from "opensea-js";
import { ethers } from "ethers";

export const provider = new ethers.providers.Web3Provider(window.ethereum);

export const seaport = new OpenSeaPort(provider, {
  networkName: Network.provider,
});
