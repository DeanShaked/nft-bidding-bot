import * as Web3 from "web3";
import { OpenSeaPort, Network } from "opensea-js";
import { getDefaultProvider } from "ethers";
import { NftProvider, useNft } from "use-nft";

import "./App.css";
// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io");

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
});

function App() {
  const ethersConfig = {
    provider: getDefaultProvider("homestead"),
  };
  return (
    <div className="App">
      {" "}
      <NftProvider fetcher={["ethers", ethersConfig]}>
        <Nft />
      </NftProvider>
    </div>
  );
}

function Nft() {
  const { loading, error, nft } = useNft(
    "0xf3114dd5c5b50a573e66596563d15a630ed359b4",
    "668"
  );

  // nft.loading is true during load.
  // TODO: Add Loading Spinner
  if (loading) return <>Loading…</>;

  // nft.error is an Error instance in case of error.
  if (error || !nft) return <>Error.</>;

  // You can now display the NFT metadata.
  return (
    <section>
      <h1>{nft.name}</h1>
      <img src={nft.image} alt="" />
      <p>{nft.description}</p>
      <p>Owner: {nft.owner}</p>
      <p>Metadata URL: {nft.metadataUrl}</p>
    </section>
  );
}

export default App;
