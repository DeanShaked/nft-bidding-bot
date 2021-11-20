// App
import React from "react";

// Redux
import { useSelector } from "react-redux";

// Components
import Search from "../../components/search/Search";
import Offer from "../../components/Offer/Offer";
import MetaMaskOnBoarding from "../metamask-onboarding/MetaMaskOnBoarding";

// Styling
import "./home.scss";

// Initial value for the assets list format.

const Home = () => {
  const accountAddress = useSelector(
    (state) => state.app.user.metaMaskAccountAddress
  );
  const assetsList = useSelector((state) => state.app.assetsList);

  return accountAddress ? (
    <div className="home">
      <div className="home-wrapper">
        <Search />
        <Offer assetsList={assetsList} accountAddress={accountAddress} />
      </div>
    </div>
  ) : (
    <MetaMaskOnBoarding />
  );
};

export default Home;
