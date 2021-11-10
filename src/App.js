import CollectionTable from "./components/collection_table/CollectionTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAssets, fetchCollections } from "./store/asyncThunk";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const assetsList = useSelector((state) => state.app.assetsList);
  const collectionsList = useSelector((state) => state.app.collectionsList);

  useEffect(() => {
    dispatch(fetchAssets("desperate-ape-wives"));
    dispatch(fetchCollections("0x5249ec348eb8cd970778f6f9f8e38ff2400d7634"));
  }, []);

  console.log(assetsList);
  console.log(assetsList);

  return (
    <div className="App">
      <div className="collection-wrapper">
        <input type="text" placeholder="enter slug" />
        <h3>Collection Name</h3>
        <hr />
        {assetsList.map((asset, index) => {
          return <div key={index}>{asset.id}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
