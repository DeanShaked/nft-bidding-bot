import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/search/Search";
import { fetchAssets, fetchBundles } from "../../store/asyncThunk";
import CollectionTable from "../collection-table/CollectionTable";

import "./home.scss";
const Home = () => {
  const dispatch = useDispatch();
  const collectionSlug = useSelector((state) => state.app.collectionSlug);

  if (collectionSlug !== "") {
    dispatch(fetchAssets(collectionSlug));
    dispatch(fetchBundles(true, "0xf1268733c6fb05ef6be9cf23d24436dcd6e0b35e"));
  }

  return (
    <div className="home">
      <div className="home-wrapper">
        <Search />
        <CollectionTable />
      </div>
    </div>
  );
};

export default Home;
