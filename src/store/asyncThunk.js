import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAssets, getCollections, getBundles } from "../utils/api";

// Async request with redux to get assets list
export const fetchAssets = createAsyncThunk(
  "getAssets",
  async (collectionSlug) => {
    const response = await getAssets(collectionSlug);
    return response.assets;
  }
);

// Async request with redux to get collections list
export const fetchCollections = createAsyncThunk(
  "getCollections",
  async (asset_owner) => {
    const response = await getCollections(asset_owner);
    return response.data;
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
