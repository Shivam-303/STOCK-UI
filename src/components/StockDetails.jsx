import React from "react";

function StockDetails({ stock }) {
  return (
    <div>
      <h2>{stock.name}</h2>
      <p style={{ marginBottom: "1rem" }}>Current Price: ₹{stock.price}</p>

      <div
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "#ddd",
          borderRadius: "8px",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#666",
        }}
      >
        Mini Chart (Static Placeholder)
      </div>
    </div>
  );
}

export default StockDetails;
