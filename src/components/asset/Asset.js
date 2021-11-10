import React from "react";

const Asset = ({ asset }) => {
  // console.log(asset);
  return (
    <>
      <div className="asset-id">Asset ID: {asset.id}</div>
      <div className="asset-id">Asset Token ID: {asset.token_id}</div>
      <div className="asset-id">
        Collection Contract Address: {asset.asset_contract.address}
      </div>
      {/* <img src={asset.image_preview_url} alt="" /> */}
      <div className="asset-id">{asset.owner}</div>
    </>
  );
};

export default Asset;
