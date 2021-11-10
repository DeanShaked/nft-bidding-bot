import React from "react";
import Asset from "../asset/Asset";

const CollectionTable = ({ assetList }) => {
  // console.log(assetList);
  return (
    <div className="collection-table">
      <div className="collection-container">
        {assetList.map((asset, index) => {
          return (
            <div key={index} className="asset-wrapper">
              <Asset key={index} asset={asset} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionTable;
