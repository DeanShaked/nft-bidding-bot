import { createSlice } from "@reduxjs/toolkit";
import { fetchAssets, makeOffers } from "../asyncThunk";

const initialState = {
  user: {
    metaMaskAccountAddress: "",
  },
  collectionSlug: "",
  collectionOffset: "",
  assetsList: "",
  assetsToOffer: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Reload Assets List
    addmetaMaskAccountAddress: (state, action) => {
      state.user.metaMaskAccountAddress = action.payload[0];
    },
    addCollectionSlug: (state, action) => {
      state.collectionSlug = action.payload;
    },

    addCollectionOffset: (state, action) => {
      state.collectionOffset = action.payload;
    },
  },
  extraReducers: {
    [fetchAssets.fulfilled]: (state, action) => {
      state.assetsList = action.payload;
    },
    [makeOffers.fulfilled]: (state, action) => {
      state.assetsToOffer = action.payload;
    },
  },
});

export const {
  addmetaMaskAccountAddress,
  addCollectionSlug,
  addCollectionOffset,
  addAssetsList,
} = appSlice.actions;
export default appSlice.reducer;
