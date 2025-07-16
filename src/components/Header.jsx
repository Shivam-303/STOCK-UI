import React from "react";

function Header() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#1f2937", // dark gray
      color: "white",
      padding: "1rem"
    }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>StockPulse</h1>
      <input
        type="text"
        placeholder="Search stocks..."
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: "none",
          width: "300px",
          color: "black"
        }}
      />
    </div>
  );
}

export default Header;
