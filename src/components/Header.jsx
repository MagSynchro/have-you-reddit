import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { selectVisitedSubreddits } from "../features/subreddits/subredditsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const visited = useSelector(selectVisitedSubreddits);
  const { subredditName } = useParams();
  const currentSub = subredditName || "popular";
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo">Have You Reddit?</h1>
      <div className="header-controls">
      <select
        value={currentSub}
        onChange={(e) => navigate(`/r/${e.target.value}`)}
      >
        {visited.map((sub) => (
          <option key={sub} value={sub}>
            {sub === "popular" ? "Popular" : `r/${sub}`}
          </option>
        ))}
      </select>
      <SearchBar />
      </div>
    </header>
  );
}