import React, {useState} from "react";
import "../styles/SearchBar.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!term.trim()) return;

        navigate(`/search?q=${encodeURIComponent(term)}`, {replace: false});
        setTerm("");
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
             type="text"
             placeholder="Search Reddit..."
             value={term}
             onChange={(e) => setTerm(e.target.value)}
            />
        <button type="submit">Search</button>
        </form>
    
)
};