// App
import React from "react";

// Redux
import { useSelector } from "react-redux";

// Api
import { seaport } from "../../utils/config";
import { getAssets } from "../../api/api";
import { WyvernSchemaName } from "opensea-js/lib/types";

// Components
import Search from "../../components/search/Search";

// Styling
import "./home.scss";

const Home = () => {
  // Get the collection data from the redux store.
  const collectionSlug = useSelector((state) => state.app.collectionSlug);
  const collectionOffset = useSelector((state) => state.app.collectionOffset);

  // Get the user credentials to make an offer
  const accountAddress = useSelector(
    (state) => state.app.user.metaMaskAccountAddress
  );

  // Initial value for the assets list format.
  const assetsList = [
    {
      tokenId: "",
      tokenAddress: "",
      schemaName: WyvernSchemaName,
    },
  ];

  // Log the user credentials to make sure
  console.log(accountAddress);
  if (collectionSlug !== "" && collectionOffset !== "") {
    getAssets(collectionSlug, collectionOffset)
      .then((r) => {
        assetsList.push(r);
      })
      .then((r) => {
        assetsList[1].forEach((asset) => {
          seaport
            .createBuyOrder({
              asset: {
                tokenAddress: asset.tokenAddress,
                tokenId: asset.tokenId,
                schemaName: WyvernSchemaName,
              },
              accountAddress: accountAddress,
              startAmount: 0.001,
              // Optional expiration time for the order, in Unix time (seconds):
              expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * 24), // One day from now
            })
            .then((r) => console.log(r))
            .catch((err) => console.error(err));
        });
      });
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
