import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Have You Reddit?</h1>
      <SearchBar />{/* SearchBar and Combo/Dropdown box to be added here later. */}
    </header>
  );
}