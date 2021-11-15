import { createAsyncThunk } from "@reduxjs/toolkit";
import { createBundleBuyOrder, getAssets } from "../api/api";

// Async request with redux to get assets list
export const fetchAssets = createAsyncThunk(
  "getAssets",
  async (collectionSlug, collectionLength) => {
    const response = await getAssets(collectionSlug, collectionLength);
    return response;
  }
);

export const fetchOffers = createAsyncThunk(
  "createBundleBuyOrder",
  async (assets, accountAddress) => {
    const response = await createBundleBuyOrder(assets, accountAddress);
    return response;
  }
);
