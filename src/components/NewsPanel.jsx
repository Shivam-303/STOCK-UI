import React from "react";
import newsData from "../data/news.json";

function NewsPanel({ stock }) {
  const newsList = newsData[stock.symbol] || [];

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Related News</h3>
      <ul>
        {newsList.map((news, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>
            📰 {news}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPanel;
