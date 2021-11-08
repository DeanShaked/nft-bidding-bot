import React from "react";
import { NftProvider } from "use-nft";
import { ethersConfig } from "../../utils/config";
import Asset from "../asset/Asset";

const CollectionTable = ({ assets }) => {
  return (
    <div className="collection-table">
      <div className="collection-container">
        {assets.map((asset) => {
          return (
            <div className="asset-wrapper">
              <NftProvider fetcher={["ethers", ethersConfig]}>
                <Asset
                  tokenAdress={asset.tokenAdress}
                  tokenId={asset.tokenId}
                />
              </NftProvider>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionTable;
