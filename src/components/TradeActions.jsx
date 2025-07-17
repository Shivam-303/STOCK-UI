import React from "react";

function TradeActions({ stock }) {
  const handleBuy = () => {
    alert(`Redirecting to Groww for buying ${stock.symbol}`);
  };

  const handleSell = () => {
    alert(`Redirecting to Groww for selling ${stock.symbol}`);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={handleBuy} style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}>
        Buy
      </button>
      <button onClick={handleSell} style={{ padding: "0.5rem 1rem" }}>
        Sell
      </button>
    </div>
  );
}

export default TradeActions;
