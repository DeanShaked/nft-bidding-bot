import React from "react";
import { useNft } from "use-nft";

const Asset = ({ tokenAdress, tokenId }) => {
  const { loading, error, nft } = useNft(tokenAdress, tokenId);

  // nft.loading is true during load.
  // TODO: Add Loading Spinner
  if (loading) return <>Loading…</>;

  // nft.error is an Error instance in case of error.
  if (error || !nft) return <>Error.</>;

  // You can now display the NFT metadata.
  return (
    <div>
      <img src={nft.image} alt="" />
      <p>Owner: {nft.owner}</p>
      <p>Meta URL: {nft.metadataUrl}</p>
    </div>
  );
};

export default Asset;
