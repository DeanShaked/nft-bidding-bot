import React from "react";
import axios from "axios";

const CollectionAssets = ({ collectionSlug, owner }) => {
  // Params Init
  const params = {};

  if (collectionSlug) params.collectionslug = collectionSlug;
  if (owner) params.owner = owner;

  const res = axios.get(
    `https://api.opensea.io/api/v1/assets${collectionSlug}`
  );
  return <div></div>;
};

export default CollectionAssets;
import React from "react";
