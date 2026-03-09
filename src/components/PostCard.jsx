import React from "react";
import { Link } from "react-router-dom";
import formatNumber from "../utils/helpers.js";

export default function PostCard({ post }) {
  const validThumbnail =
  post.thumbnail &&
  post.thumbnail.startsWith("http") &&
  !["self", "default", "nsfw", "spoiler"].includes(post.thumbnail);

  const decodedThumbnail = validThumbnail ? post.thumbnail.replace(/&amp;/g, "&") : null;
  const decodedTitle = post.title.replace(/&amp;/g, "&");


  return (
    <div className="post-card">
      <Link to={`/r/${post.subreddit}/${post.id}`}>

        <div className="post-layout">

          {/* Thumbnail */}
          {decodedThumbnail && (
            <img
              src={decodedThumbnail}
              alt={decodedTitle}
              className="post-thumbnail"
            />
)}

          {/* Post info */}
          <div className="post-info">
            <h3 className="post-title">{decodedTitle}</h3>

            <p className="post-meta">
              ⬆ {formatNumber(post.ups)} 💬 {formatNumber(post.num_comments)} Posted by u/{post.author} in r/{post.subreddit}
            </p>
          </div>

        </div>

      </Link>
    </div>
  );
}