//Component to render/build Reddit post with comments
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import { useParams } from "react-router-dom";
import {formatNumber, removeAmp } from "../utils/helpers.js";
import Comment from "../components/Comment.jsx";

export default function Post() {
const { subredditName, postId }  = useParams();
const [post, setPost] = useState('');
const [comments, setComments] = useState([]);

const breadcrumbPath = [
    { name: "Home", url: "/" },
  { name: `r/${subredditName}`, url: `/r/${subredditName}` },
  { name: post.title, url: `/r/${subredditName}/${postId}` }
];

useEffect(() => {
    async function fetchPosts() {
        const response = await fetch(
            `/reddit/r/${subredditName}/comments/${postId}.json`
        );

        const json = await response.json();

        setPost(json[0].data.children[0].data);
        setComments(json[1].data.children);
    }
    fetchPosts();
}, [subredditName, postId]);
if (!post) return <p>Loading...</p>;

return (
    <div className="post-page">
        <Header />
        <Breadcrumbs path={breadcrumbPath} />
        <h2>{removeAmp(post.title)}</h2>
        <p>Posted by <strong>u/{post.author}</strong></p>
        <h3>Comments</h3>
        {comments.filter(comment => comment.kind === "t1").map(comment =>(
            <Comment key={comment.data.id} comment={comment} />                
        ))}
    </div>
  );
}