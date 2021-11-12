import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addMetaMaskAccountId } from "../../store/slicers/appSlice";
import { useDispatch } from "react-redux";
import { fetchAssets } from "../../store/asyncThunk";

const MetaMaskOnBoarding = () => {
  const dispatch = useDispatch();
  const { ethereum } = window;

  useEffect(() => {
    dispatch(fetchAssets("desperate-ape-wives"));
  }, [dispatch]);

  const onClickConnect = async () => {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const res = await ethereum.request({ method: "eth_accounts" });
      dispatch(addMetaMaskAccountId(res));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavLink to={"/collection-table"}>
        <button onClick={onClickConnect}>Connect to Meta Mask</button>
      </NavLink>
    </div>
  );
};

export default MetaMaskOnBoarding;
