import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAssets } from "../api/api";

// Async request with redux to get assets list
export const fetchAssets = createAsyncThunk(
  "getAssets",
  async (collectionSlug, collectionLength) => {
    const response = await getAssets(collectionSlug, collectionLength);
    return response;
  }
);
