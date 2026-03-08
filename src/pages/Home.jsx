import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";
import { fetchPosts, selectPosts, selectPostsLoading, selectPostsError } from "../features/posts/postsSlice";

export default function Home() {
  const breadcrumbPath = [{ name: "Home", url: "/" }];
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);

  useEffect(() => {
    dispatch(fetchPosts()); // default "popular"
  }, [dispatch]);

  return (
    <div className="home-page">
      <Header />
      <Breadcrumbs path={breadcrumbPath} />

      {loading && <p>Loading popular posts...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && <SearchResults results={posts} />}
    </div>
  );
}