import React from "react";
import { useNft } from "use-nft";

const Asset = () => {
  const { loading, error, nft } = useNft(
    "0xf3114dd5c5b50a573e66596563d15a630ed359b4",
    "668"
  );

  console.log(nft);

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
};

export default Asset;
