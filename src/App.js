// App
import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchAssets } from "./store/asyncThunk";

// Styles
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactRouter from "./layout/ReactRouter";

const App = () => {
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  return (
    <BrowserRouter>
      {!isMetaMaskInstalled() ? (
        <div>Please Install Meta Mask </div>
      ) : (
        <ReactRouter />
      )}
    </BrowserRouter>
  );
};

export default App;
