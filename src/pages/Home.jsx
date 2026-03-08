//App's home page.
import React from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Home() {
  const breadcrumbPath = [{ name: "Home", url: "/" }]; // static for now will be wiring up later with fetch info.

  return (
    <div className="home-page">
      <Header />
      <Breadcrumbs path={breadcrumbPath} />

      <section className="search-results">
        <p>Search results will appear here.</p>
      </section>
    </div>
  );
}