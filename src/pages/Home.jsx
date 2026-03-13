import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";
import FilterBar from "../components/FilterBar";
import { fetchPosts, selectPosts, selectPostsLoading, selectPostsError } from "../features/posts/postsSlice";

export default function Home() {
  const breadcrumbPath = [{ name: "Home", url: "/" }];
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);  

  const [sort, setSort] = useState("hot"); // default filter for Home set to Hot.

  useEffect(() => {
    dispatch(fetchPosts({ subreddit: "popular", sort })); // default "popular"
  }, [dispatch, sort]);

  return (
    <div className="home-page">
      <Header />
      <Breadcrumbs path={breadcrumbPath} />
      <FilterBar currentSort={sort} onSortChange={setSort} />

      {loading && <p>Loading popular posts...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && <SearchResults results={posts} />}
    </div>
  );
}