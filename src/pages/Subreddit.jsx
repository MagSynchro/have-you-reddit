import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectPosts, selectPostsLoading, selectPostsError, selectAfter } from "../features/posts/postsSlice";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import PostCard from "../components/PostCard";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

export default function Subreddit() {
  const { subredditName } = useParams();
  const breadcrumbPath = [{ name: "Home", url: "/" },
  { name: `r/${subredditName}`, url: `/r/${subredditName}` },
];
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectPostsLoading);
  const [sort, setSort] = useState("hot");
  const after = useSelector(selectAfter);

  useEffect(() => {
    dispatch(fetchPosts({subreddit: subredditName, sort}));
  }, [dispatch, subredditName, sort]);

  const handleNext = () => {
  dispatch(fetchPosts({ subreddit: subredditName, sort, after }));
  window.scrollTo(0, 0);
};

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <Breadcrumbs path={breadcrumbPath} />
      <FilterBar currentSort={sort} onSortChange={setSort} />

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <Pagination after={after} onNext={handleNext} />
    </div>
  );
}