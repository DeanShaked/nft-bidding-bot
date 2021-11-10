import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAssets } from "./store/asyncThunk";
import CollectionTable from "./components/collection_table/CollectionTable";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const assetsList = useSelector((state) => state.app.assetsList);

  useEffect(() => {
    dispatch(fetchAssets("desperate-ape-wives"));
  }, []);

  return (
    <div className="App">
      {assetsList ? (
        <div className="collection-wrapper">
          <input type="text" placeholder="enter slug" />
          <h3>{assetsList[0].collection.name}</h3>
          <hr />

          <CollectionTable assetList={assetsList} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
