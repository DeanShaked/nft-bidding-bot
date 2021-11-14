import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAssets, getBundles } from "../api/api";

// Async request with redux to get assets list
export const fetchAssets = createAsyncThunk(
  "getAssets",
  async (collectionSlug, collectionLength) => {
    const response = await getAssets(collectionSlug, collectionLength);
    return response;
  }
);

// Async request with redux to get bundles list
export const fetchBundles = createAsyncThunk(
  "getBundles",
  async (on_sale, owner, asset_contract_address) => {
    const response = await getBundles(on_sale, owner, asset_contract_address);
    return response.data;
  }
);
