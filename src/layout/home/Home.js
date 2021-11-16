import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssets } from "../../api/api";
import MakeOffer from "../../components/makeOffer/MakeOffer";
import Search from "../../components/search/Search";
import { addAssetsList } from "../../store/slicers/appSlice";

import "./home.scss";
const Home = () => {
  const dispatch = useDispatch();
  const collectionSlug = useSelector((state) => state.app.collectionSlug);
  const collectionLength = useSelector((state) => state.app.collectionLength);
  const collectionOffset = useSelector((state) => state.app.collectionOffset);
  const assetsList = [];

  if (
    collectionSlug !== "" &&
    collectionLength !== "" &&
    collectionOffset !== ""
  ) {
    getAssets(collectionSlug, collectionLength, collectionOffset).then((r) =>
      assetsList.push(r)
    );
  }

  return (
    <div className="home">
      <div className="home-wrapper">
        <Search />
        {assetsList.length > 0 ? <MakeOffer aList={assetsList} /> : null}
      </div>
    </div>
  );
};

export default Home;
