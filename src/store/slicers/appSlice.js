import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    metaMaskAccountAddress: "",
  },
  collectionSlug: "",
  collectionLength: "",
  collectionOffset: "",
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
    addCollectionOffset: (state, action) => {
      state.collectionOffset = action.payload;
    },
    addAssetsList: (state, action) => {
      state.assetsList = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  addmetaMaskAccountAddress,
  addCollectionSlug,
  addCollectionLength,
  addCollectionOffset,
  addAssetsList,
} = appSlice.actions;
export default appSlice.reducer;
