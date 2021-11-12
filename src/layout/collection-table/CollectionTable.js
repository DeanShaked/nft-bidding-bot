import React from "react";
import { useSelector } from "react-redux";
import Asset from "../../components/asset/Asset";

const CollectionTable = () => {
  const assetList = useSelector((state) => state.app.assetsList);
  console.log(assetList);
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
