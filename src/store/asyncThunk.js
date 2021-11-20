import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAssets, getOffers } from "../api/api";

// Async request with redux to get user data
export const fetchAssets = createAsyncThunk(
  "assets/getAssets",
  async ({ collectionSlug, collectionOffset }) => {
    const assetsList = await getAssets(collectionSlug, collectionOffset);
    return assetsList;
  }
);
export const makeOffers = createAsyncThunk(
  "assets/getOffers",
  async ({ assetsList, accountAddress }) => {
    const assetsToOffer = await getOffers(assetsList, accountAddress);
    return assetsToOffer;
  }
);
