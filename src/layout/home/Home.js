import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBundleBuyOrder, getAssets } from "../../api/api";
import Search from "../../components/search/Search";

import "./home.scss";
const Home = () => {
  const collectionSlug = useSelector((state) => state.app.collectionSlug);
  const collectionLength = useSelector((state) => state.app.collectionLength);

  const accountAddress = useSelector(
    (state) => state.app.user.metaMaskAccountAddress
  );
  const assetsList = useSelector((state) => state.app.assetsList);

  if (collectionSlug !== "") {
    console.log("collectionSlug: ", collectionSlug);
    console.log("collectionLength: ", collectionLength);
    getAssets(collectionSlug, collectionLength);
  }
  if (assetsList !== "") {
    createBundleBuyOrder(assetsList, accountAddress);
  }

  return (
    <div className="home">
      <div className="home-wrapper">
        <Search />
        {assetsList && <div>{assetsList}</div>}
      </div>
    </div>
  );
};

export default Home;
