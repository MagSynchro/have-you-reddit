//App's home page.
import React from "react";
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Home() {
  const breadcrumbPath = [{ name: "Home", url: "/" }]; // static for now will be wiring up later with fetch info.
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    fetchResults("Popular");
  }, []);


  const fetchResults = async (term) => {
    // For now, setting dummy results for best feedback with console.log shadow
    const dummyResults = [
      { id: 1, title: "Result On"},
      { id: 2, title: "Result Two"},
    ];
    setResults(dummyResults);
  };
  
  //dummy results path for now.
  return (
    <div className="home-page">
      <Header />
      <Breadcrumbs path={breadcrumbPath} />      
      <section className="search-results">
        {results.map((results) => (
          <div key={result.id} className="result-item">
            {result.title}
          </div>
        ))}        
      </section>
    </div>
  );
}