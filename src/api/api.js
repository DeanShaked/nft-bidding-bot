import axios from "axios";
import routes from "../utils/routes";

export const getAssets = async (collectionSlug, collectionLength) => {
  const response = await axios.get(
    `${routes._URL_GET_ASSETS}/${collectionSlug}/${collectionLength}`
  );
  return response.data;
};

export const createBundleBuyOrder = async (assets, accountAddress) => {
  const response = await axios.get(
    `${routes._URL_CREATE_BUNDLE_BUY_ORDER}/${assets}/${accountAddress}`
  );
  return response.data;
};
