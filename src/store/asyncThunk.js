import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAssets, getBundles } from "../api/api";

// Async request with redux to get assets list
export const fetchAssets = createAsyncThunk(
  "getAssets",
  async (collectionSlug) => {
    const response = await getAssets(collectionSlug);
    return response.assets;
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
