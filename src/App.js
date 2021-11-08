import CollectionTable from "./components/collection_table/CollectionTable";

import "./App.css";

function App() {
  const assetsList = [
    [
      {
        tokenAddress: "0xf3114dd5c5b50a573e66596563d15a630ed359b4",
        tokenId: "668",
      },
      {
        tokenAddress: "0xf3114dd5c5b50a573e66596563d15a630ed359b4",
        tokenId: "668",
      },
    ],
  ];
  return (
    <div className="App">
      <div className="collection-wrapper">
        <h3>Collection Name</h3>
        <CollectionTable assets={assetsList} />
      </div>
    </div>
  );
}

export default App;
