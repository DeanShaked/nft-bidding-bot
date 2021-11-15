import { createSlice } from "@reduxjs/toolkit";
import { fetchAssets, fetchOffers } from "../asyncThunk";

const initialState = {
  user: {
    metaMaskAccountAddress: "",
  },
  collectionSlug: "",
  collectionLength: "",
  makeOrders: "",
  assetsList: "",
  assetsOffer: {},
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
    addCollectionLength: (state, action) => {
      state.collectionLength = action.payload;
    },
  },
  extraReducers: {
    // Assets
    [fetchAssets.fulfilled]: (state, action) => {
      state.assetsList = action.payload;
    },
    [fetchOffers.fulfilled]: (state, action) => {
      state.makeOrders = action.payload;
    },
  },
});

export const {
  addmetaMaskAccountAddress,
  addCollectionSlug,
  addCollectionLength,
} = appSlice.actions;
export default appSlice.reducer;
