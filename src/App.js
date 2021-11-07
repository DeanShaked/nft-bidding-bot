import { NftProvider } from "use-nft";
import { seaport, ethersConfig } from "./utils/config";

import Asset from "./components/asset/Asset";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="collection-wrapper">
        <h3>Collection Name</h3>
        <div className="asset-wrapper">
          <NftProvider fetcher={["ethers", ethersConfig]}>
            <Asset />
          </NftProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
