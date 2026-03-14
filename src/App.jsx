import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Subreddit from "./pages/Subreddit";
import Post from "./pages/Post";



export default function App() {
  
  return (
    <div className="app-container">
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/r/:subredditName" element={<Subreddit />} />
        <Route path="/r/:subredditName/:postId" element={<Post />} />
      </Route>
    </Routes>
    </div>
  )
}
