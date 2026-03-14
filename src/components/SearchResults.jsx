// search results component, recieves a results object then parses it through PostCard.
import React from "react";
import "../styles/SearchResults.css";
import PostCard from "./PostCard";

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
      {results.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}