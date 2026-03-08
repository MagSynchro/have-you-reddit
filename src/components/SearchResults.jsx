// src/components/SearchResults.jsx
import React from "react";

export default function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return (
      <section className="search-results">
        <p>No results found.</p>
      </section>
    );
  }

  return (
    <section className="search-results">
      <ul>
        {results.map((item) => (
          <li key={item.id} className="search-result-item">
            {/* For now, just show the title */}
            <h3>{item.title}</h3>
            <p>By {item.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}