import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import { fetchPosts, selectPosts, selectPostsLoading, selectPostsError, selectAfter } from "../features/posts/postsSlice";

export default function Home() {
  const breadcrumbPath = [{ name: "Home", url: "/" }];
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);  
  const after = useSelector(selectAfter);  
  const [sort, setSort] = useState("hot"); // default filter for Home set to Hot.

  const handleNext = () => {
    dispatch(fetchPosts({ subreddit: "popular", sort, after }));
    window.scrollTo(0, 0);
  };

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
      <Pagination after={after} onNext={handleNext} />
    </div>
  );
}