import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StockDetails from "./components/StockDetails";
import TradeActions from "./components/TradeActions";
import NewsPanel from "./components/NewsPanel";
import AIInsightsButton from "./components/AiInsightsButton";

import stockData from "./data/stocks.json";

function App() {
  const [selectedStock, setSelectedStock] = useState(stockData[0]);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar stocks={stockData} onSelect={setSelectedStock} />
        
        <div style={{ padding: "2rem", flex: 1 }}>
          <StockDetails stock={selectedStock} />
          <TradeActions stock={selectedStock} />
          <NewsPanel stock={selectedStock} />
          <AIInsightsButton />
        </div>
      </div>
    </div>
  );
}

export default App;
