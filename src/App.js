import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import stockData from "./data/stocks.json";

function App() {
  const [selectedStock, setSelectedStock] = useState(stockData[0]);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar stocks={stockData} onSelect={setSelectedStock} />
        <div style={{ padding: "2rem", flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem" }}>{selectedStock.name}</h2>
          <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
            Current Price: ₹{selectedStock.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
