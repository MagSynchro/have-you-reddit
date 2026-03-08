import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={`/r/${post.subreddit}/${post.id}`}>

        <div className="post-layout">

          {/* Thumbnail */}
          {post.thumbnail && post.thumbnail.startsWith("http") && (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="post-thumbnail"
            />
          )}

          {/* Post info */}
          <div className="post-info">
            <h3 className="post-title">{post.title}</h3>

            <p className="post-meta">
              Posted by u/{post.author} in r/{post.subreddit}
            </p>
          </div>

        </div>

      </Link>
    </div>
  );
}