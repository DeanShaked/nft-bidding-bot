import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCollectionLength,
  addCollectionSlug,
} from "../../store/slicers/appSlice";

import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();

  const [collectionSlug, setCollectionSlug] = useState("");
  const [collectionLength, setCollectionLength] = useState("");

  const handleSlugInput = (e) => {
    setCollectionSlug(e.target.value);
  };
  const handleCollectionLengthInput = (e) => {
    setCollectionLength(e.target.value);
  };

  const handleClick = () => {
    dispatch(addCollectionSlug(collectionSlug));
    dispatch(addCollectionLength(collectionLength));
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Enter collection slug"
        onChange={handleSlugInput}
        value={collectionSlug}
      ></input>
      <input
        className="search-input"
        type="text"
        placeholder="Enter range (150 - 200)"
        onChange={handleCollectionLengthInput}
        value={collectionLength}
      ></input>
      <button className="seach-button" onClick={handleClick}>
        fetchAssets
      </button>
    </div>
  );
};

export default Search;
