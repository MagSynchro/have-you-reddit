import React from "react";

export default function FilterBar({ currentSort, onSortChange }) {
    const options = ["hot", "new", "top"];

    return (
        <div className="filter-bar">
            {options.map((option) => (
                <button
                key={option}
                className={currentSort === option ? "active" : ""}
                onClick={() => onSortChange(option)}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            
            ))}
        </div>
    )
}