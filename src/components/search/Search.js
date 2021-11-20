// App
import React, { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { fetchAssets } from "../../store/asyncThunk";
import {
  addCollectionSlug,
  addCollectionOffset,
} from "../../store/slicers/appSlice";

// Styles
import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();

  const [collectionSlug, setCollectionSlug] = useState("");
  const [collectionOffset, setCollectionOffset] = useState("");

  const completeForm = () => {
    if (collectionSlug && addCollectionOffset) {
      dispatch(addCollectionSlug(collectionSlug));
      dispatch(addCollectionOffset(collectionOffset));
      const collectionReq = { collectionSlug, collectionOffset };

      dispatch(fetchAssets(collectionReq));
    }
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Collection Slug"
        onChange={(e) => setCollectionSlug(e.target.value)}
        value={collectionSlug}
      ></input>

      <input
        className="search-input"
        type="text"
        placeholder="Offset"
        onChange={(e) => setCollectionOffset(e.target.value)}
        value={collectionOffset}
      ></input>

      <button className="seach-button" onClick={completeForm}>
        fetchAssets
      </button>
    </div>
  );
};

export default Search;
