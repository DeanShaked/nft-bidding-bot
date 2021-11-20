import axios from "axios";
import routes from "../utils/routes";

export const getAssets = async (collectionSlug, collectionOffset) => {
  const response = await axios.get(
    `${routes._URL_GET_ASSETS}/${collectionSlug}/${collectionOffset}`
  );
  return response.data;
};

export const getOffers = async (assetsList, accountAddress) => {
  const response = await axios.post(`${routes._URL_GET_OFFERS}`, {
    assetsList: assetsList,
    accountAddress: accountAddress,
  });

  return response.data;
};
