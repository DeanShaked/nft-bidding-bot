import React from "react";
import { NavLink } from "react-router-dom";
import { addmetaMaskAccountAddress } from "../../store/slicers/appSlice";
import { useDispatch } from "react-redux";

const MetaMaskOnBoarding = () => {
  const dispatch = useDispatch();
  const { ethereum } = window;

  const onClickConnect = async () => {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const accountAddress = await ethereum.request({ method: "eth_accounts" });
      dispatch(addmetaMaskAccountAddress(accountAddress));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavLink to={"/home"}>
        <button onClick={onClickConnect}>Connect to Meta Mask</button>
      </NavLink>
    </div>
  );
};

export default MetaMaskOnBoarding;
