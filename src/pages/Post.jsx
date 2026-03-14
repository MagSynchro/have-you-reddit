// Component to render/build Reddit post with comments
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import { useParams } from "react-router-dom";
import { formatNumber, removeAmp } from "../utils/helpers.js";
import Comment from "../components/Comment.jsx";
import "../styles/Post.css";

export default function Post() {
  const { subredditName, postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPostData() {
      const response = await fetch(
        `/reddit/r/${subredditName}/comments/${postId}.json`
      );
      const json = await response.json();
      setPost(json[0].data.children[0].data);
      setComments(json[1].data.children);
    }
    fetchPostData();
  }, [subredditName, postId]);

  if (!post) return <div className="loading-overlay">Loading...</div>;

  const breadcrumbPath = [
    { name: "Home", url: "/" },
    { name: `r/${subredditName}`, url: `/r/${subredditName}` },
    { name: post.title, url: `/r/${subredditName}/${postId}` },
  ];

  // Renders post body (text + inline media)
  const renderBody = (body) => {
    if (!body) return null;
    const parts = body.split(/\s+/);
    const urlRegex = /(https?:\/\/[^\s]+)/;

    return parts.map((part, i) => {
      const cleanPart = removeAmp(part);
      const urlWithoutQuery = cleanPart.split("?")[0];

      // Image
      if (/\.(jpeg|jpg|png|gif)$/i.test(urlWithoutQuery)) {
        return (
          <img
            key={i}
            src={cleanPart}
            alt="inline"
            style={{ maxWidth: "60%", margin: "10px 0" }}
          />
        );
      }

      // Reddit video
      if (/v\.redd\.it/.test(cleanPart)) {
        return (
          <video
            key={i}
            controls
            style={{ maxWidth: "60%", margin: "10px 0" }}
          >
            <source src={cleanPart} type="video/mp4" />
          </video>
        );
      }

      // Link
      if (urlRegex.test(cleanPart)) {
        return (
          <a
            key={i}
            href={cleanPart}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cleanPart}
          </a>
        );
      }

      // Plain text
      return <span key={i}> {cleanPart} </span>;
    });
  };

  return (
    <div className="post-page">      
      <Breadcrumbs path={breadcrumbPath} />

      <h2>{removeAmp(post.title)}</h2>

      <div className="post-body">
        {post.selftext
          ? renderBody(post.selftext)
          : post.url
          ? renderBody(post.url)
          : null}
      </div>

      <p>
        Posted by <strong>u/{post.author}</strong> ⬆{formatNumber(post.ups)}
      </p>

      <h3>Comments</h3>
      {comments.map((comment) => (
        <Comment key={comment.data?.id || Math.random()} comment={comment} />
      ))}
    </div>
  );
}