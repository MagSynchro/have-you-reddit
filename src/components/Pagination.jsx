import React from "react";
import "../styles/Pagination.css";

export default function Pagination({ after, onNext}) {
    return (
        <div className="pagination">            
            <button                
                onClick={onNext}
            >
                Next ▶
            </button>
        </div>
    );
}