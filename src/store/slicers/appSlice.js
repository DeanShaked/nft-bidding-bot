import { createSlice } from "@reduxjs/toolkit";
import { fetchAssets, fetchBundles } from "../asyncThunk";

const initialState = {
  user: {
    metaMaskAccountAddress: "",
  },
  assetsList: "",
  bundlesList: "",
  collectionSlug: "",
  assetsOffer: {
    tokenId: [],
    tokenAddress: "",
  },
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
    updateAssetsToOffer: (state, action) => {
      const assetsList = action.payload;

      assetsList.forEach((element, index) => {
        return state.assetsOffer.tokenId.push(element.token_id);
      });
      console.log(state.assetsOffer.tokenId);
    },
  },
  extraReducers: {
    // Assets
    [fetchAssets.fulfilled]: (state, action) => {
      state.assetsList = action.payload.filter((asset, index) => {
        return asset;
      });
    },

    // Bundles
    [fetchBundles.fulfilled]: (state, action) => {
      state.bundlesList = action.payload;
    },
  },
});

export const {
  reloadAssetsList,
  addmetaMaskAccountAddress,
  addCollectionSlug,
  updateAssetsToOffer,
} = appSlice.actions;
export default appSlice.reducer;
