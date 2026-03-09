import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectPosts, selectPostsLoading, selectPostsError } from "../features/posts/postsSlice";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import PostCard from "../components/PostCard";

export default function Subreddit() {
  const { subredditName } = useParams();
  const breadcrumbPath = [{ name: "Home", url: "/" },
  { name: `r/${subredditName}`, url: `/r/${subredditName}` },
];
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectPostsLoading);

  useEffect(() => {
    dispatch(fetchPosts(subredditName));
  }, [dispatch, subredditName]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <Breadcrumbs path={breadcrumbPath} />      

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}