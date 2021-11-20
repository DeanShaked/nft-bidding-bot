// App
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeOffers } from "../../store/asyncThunk";

// Styles
import "./Offer.scss";

const Offer = ({ assetsList, accountAddress }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (assetsList && assetsList) {
      const collectionReq = { assetsList, accountAddress };
      dispatch(makeOffers(collectionReq));
    }
  }, [assetsList, accountAddress]);

  return (
    <div className="offer">
      <div className="assets-wrapper">
        {assetsList.length > 0 ? (
          <div>assetsList arrived</div>
        ) : (
          <div>no assetsList </div>
        )}
      </div>
    </div>
  );
};

export default Offer;
