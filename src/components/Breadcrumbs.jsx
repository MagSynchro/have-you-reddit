import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ path }) {
  // Path will be an array of objects, which we will use to construct the breadcrumbs list: [{name: 'Home', url: '/'}, {name: 'r/pics', url: '/r/pics'}] etc.
  return (
    <nav className="breadcrumbs">
      {path.map((crumb, index) => (
        <span key={index}>
          <Link to={crumb.url}>{crumb.name}</Link>
          {index < path.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
}