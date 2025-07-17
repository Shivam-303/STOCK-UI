import React from "react";
// import { useTheme } from "../ThemeContext";
import { useTheme } from "./ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
      borderBottom: "1px solid #ccc"
    }}>
      <h1>📈 Stock Insight</h1>

      <button onClick={toggleTheme} style={{
        background: "none",
        border: "1px solid",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}

export default Header;
