import { createSlice } from "@reduxjs/toolkit";
import { fetchAssets, fetchCollections, fetchBundles } from "../asyncThunk";

const initialState = {
  user: null,
  assetsList: [],
  collectionsList: [],
  bundlesList: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Reload Assets List
    reloadAssetsList: (state, action) => {},
  },
  extraReducers: {
    // Assets
    [fetchAssets.fulfilled]: (state, action) => {
      state.assetsList = action.payload;
    },

    // Collection
    [fetchCollections.fulfilled]: (state, action) => {
      state.collectionsList = action.payload;
    },

    // Bundles
    [fetchBundles.fulfilled]: (state, action) => {
      state.bundlesList = action.payload;
    },
  },
});

export const { reloadAssetsList } = appSlice.actions;
export default appSlice.reducer;
