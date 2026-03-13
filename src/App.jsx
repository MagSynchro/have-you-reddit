import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Subreddit from "./pages/Subreddit";
import Post from "./pages/Post";



export default function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/r/:subredditName" element={<Subreddit />} />
      <Route path="/r/:subredditName/:postId" element={<Post />} />
    </Routes>
    </>
  )
}
