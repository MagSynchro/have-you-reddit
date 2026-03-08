// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";

export default function Home() {
  const breadcrumbPath = [{ name: "Home", url: "/" }];

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Popular posts on mount
  useEffect(() => {
    async function fetchPopular() {
      setLoading(true);
      try {
        const response = await fetch("https://www.reddit.com/r/popular.json");
        if (!response.ok) {
          throw new Error("Failed to fetch popular posts");
        }
        const json = await response.json();

        // Reddit returns posts in json.data.children
        const posts = json.data.children.map((child) => ({
          id: child.data.id,
          title: child.data.title,
          author: child.data.author,
          subreddit: child.data.subreddit,
          url: child.data.url,
          thumbnail: child.data.thumbnail,
        }));

        setSearchResults(posts);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPopular();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <Breadcrumbs path={breadcrumbPath} />

      {loading && <p>Loading popular posts...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && <SearchResults results={searchResults} />}
    </div>
  );
}