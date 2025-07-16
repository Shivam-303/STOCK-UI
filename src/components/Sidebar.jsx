import React from "react";

function Sidebar({ stocks, onSelect }) {
  return (
    <div style={{
      backgroundColor: "#f0f0f0",
      width: "200px",
      height: "100vh",
      padding: "1rem",
      borderRight: "1px solid #ccc",
      overflowY: "auto"
    }}>
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Stocks</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {stocks.map((stock, index) => (
          <li
            key={index}
            onClick={() => onSelect(stock)}
            style={{
              padding: "0.5rem",
              marginBottom: "0.5rem",
              cursor: "pointer",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              transition: "0.2s",
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#e0e0e0"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#ffffff"}
          >
            {stock.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
