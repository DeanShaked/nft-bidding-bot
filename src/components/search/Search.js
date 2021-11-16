import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCollectionLength,
  addCollectionSlug,
  addCollectionOffset,
} from "../../store/slicers/appSlice";

import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();

  const [collectionSlug, setCollectionSlug] = useState("");
  const [collectionLength, setCollectionLength] = useState("");
  const [collectionOffset, setCollectionOffset] = useState("");

  const handleSlugInput = (e) => {
    setCollectionSlug(e.target.value);
  };
  const handleCollectionLengthInput = (e) => {
    setCollectionLength(e.target.value);
  };
  const handleCollectionOffsetInput = (e) => {
    setCollectionOffset(e.target.value);
  };

  const handleClick = () => {
    dispatch(addCollectionSlug(collectionSlug));
    dispatch(addCollectionLength(collectionLength));
    dispatch(addCollectionOffset(collectionOffset));
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Collection Slug"
        onChange={handleSlugInput}
        value={collectionSlug}
      ></input>
      <input
        className="search-input"
        type="text"
        placeholder="Entering 100 === 1000 Assets (dym)"
        onChange={handleCollectionLengthInput}
        value={collectionLength}
      ></input>
      <input
        className="search-input"
        type="text"
        placeholder="Offset"
        onChange={handleCollectionOffsetInput}
        value={collectionOffset}
      ></input>
      <button className="seach-button" onClick={handleClick}>
        fetchAssets
      </button>
    </div>
  );
};

export default Search;
