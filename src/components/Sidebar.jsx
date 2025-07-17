import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

const Sidebar = ({ stocks, onSelect }) => {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");  //use state for search term

  const filteredStocks = stocks.filter((stock) => //lowercase 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        width: "250px",
        padding: "1rem",
        backgroundColor: darkMode ? "#1f1f1f" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#000000",
        borderRight: "1px solid #ccc",
      }}
    >
      <h2 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Stocks</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search stocks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      />

      {/* Filtered List */}
      {filteredStocks.map((stock) => (
        <button
          key={stock.symbol}
          onClick={() => onSelect(stock)}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          {stock.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
