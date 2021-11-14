import { createSlice } from "@reduxjs/toolkit";
import { fetchAssets } from "../asyncThunk";

const initialState = {
  user: {
    metaMaskAccountAddress: "",
  },
  collectionSlug: "",
  collectionLength: "",
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
  },
});

export const {
  addmetaMaskAccountAddress,
  addCollectionSlug,
  addCollectionLength,
} = appSlice.actions;
export default appSlice.reducer;
