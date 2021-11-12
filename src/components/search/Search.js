import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCollectionSlug,
  updateAssetsToOffer,
} from "../../store/slicers/appSlice";
import { seaport } from "../../utils/config";

import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();

  const [collectionSlug, setCollectionSlug] = useState("");

  const assetsList = useSelector((state) => state.app.assetsList);
  const accountAddress = useSelector(
    (state) => state.app.user.metaMaskAccountAddress
  );

  // console.log("assets: ", assetsList);
  // console.log("accountAddress: ", accountAddress);

  const handleSlugInput = (e) => {
    setCollectionSlug(e.target.value);
  };

  const handleClick = () => {
    dispatch(addCollectionSlug(collectionSlug));
    if (assetsList !== "") {
      dispatch(updateAssetsToOffer(assetsList));
    }
  };

  const offer = async () =>
    await seaport.createBundleBuyOrder({
      assetsList,
      accountAddress,
      startAmount: 0.001,
      // Optional expiration time for the order, in Unix time (seconds):
      expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * 24), // One day from now
    });

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Enter collection slug"
        onChange={handleSlugInput}
        value={collectionSlug ? "desperate-ape-wives" : collectionSlug}
      ></input>
      <button className="seach-button" onClick={handleClick}>
        fetchAssets
      </button>
    </div>
  );
};

export default Search;
