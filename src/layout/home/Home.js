import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { getAssets } from "../../api/api";
import MakeOffer from "../../components/makeOffer/MakeOffer";
import Search from "../../components/search/Search";
import { seaport } from "../../utils/config";

import "./home.scss";
const Home = () => {
  const collectionSlug = useSelector((state) => state.app.collectionSlug);
  const collectionOffset = useSelector((state) => state.app.collectionOffset);
  const assetsList = [
    {
      tokenId: "",
      tokenAddress: "",
    },
  ];

  const accountAddress = useSelector(
    (state) => state.app.user.metaMaskAccountAddress
  );

  console.log(accountAddress);
  if (collectionSlug !== "" && collectionOffset !== "") {
    getAssets(collectionSlug, collectionOffset)
      .then((r) => {
        assetsList.push(r);
      })
      .then(
        seaport.createBundleBuyOrder({
          assets: assetsList,
          accountAddress: accountAddress,
          startAmount: 0.001,
          // Optional expiration time for the order, in Unix time (seconds):
          expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * 24), // One day from now
        })
      );
  }

  return (
    <div className="home">
      <div className="home-wrapper">
        <Search />
      </div>
    </div>
  );
};

export default Home;
