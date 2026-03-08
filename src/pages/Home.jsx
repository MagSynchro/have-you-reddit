//App's home page.
import React, {useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";

export default function Home() {
  const breadcrumbPath = [{ name: "Home", url: "/" }]; // static for now will be wiring up later with fetch info.
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    fetchResults("Popular");
  }, []);


  const fetchResults = async (term) => {
    // For now, setting dummy results for best feedback.
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
      <SearchResults results={results} />      
    </div>
  );
}