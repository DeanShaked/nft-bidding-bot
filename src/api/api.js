import axios from "axios";
import routes from "../utils/routes";

export const getAssets = async (collectionSlug) => {
  // params init
  const params = { collection: collectionSlug, limit: "50" };
  const response = await axios.get(routes._URL_GET_ASSETS, {
    params: params,
  });
  return response.data;
};

export const getBundles = async (on_sale, owner, asset_contract_address) => {
  // params init
  const params = {
    on_sale: on_sale,
    owner: owner,
    asset_contract_address: asset_contract_address,
  };
  const response = await axios.get(routes._URL_GET_COLLECTIONS, {
    params: params,
  });
  return response.data;
};
