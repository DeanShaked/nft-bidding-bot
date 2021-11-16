import React from "react";

const MakeOffer = ({ aList }) => {
  if (aList.length > 0) {
    console.log("1");
  } else {
    console.log("2");
  }
  return (
    <div className="makeoffer">
      {aList.map((asset) => {
        return <h3>{asset.tokenId}</h3>;
      })}
    </div>
  );
};

export default MakeOffer;
