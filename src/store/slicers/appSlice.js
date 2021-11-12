import { createSlice } from "@reduxjs/toolkit";
import { fetchAssets, fetchBundles } from "../asyncThunk";

const initialState = {
  user: {
    metaMaskAccountId: "",
  },
  assetsList: "",
  bundlesList: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Reload Assets List
    addMetaMaskAccountId: (state, action) => {
      state.user.metaMaskAccountId = action.payload[0];
    },
  },
  extraReducers: {
    // Assets
    [fetchAssets.fulfilled]: (state, action) => {
      state.assetsList = action.payload;
    },

    // Bundles
    [fetchBundles.fulfilled]: (state, action) => {
      state.bundlesList = action.payload;
    },
  },
});

export const { reloadAssetsList, addMetaMaskAccountId } = appSlice.actions;
export default appSlice.reducer;
