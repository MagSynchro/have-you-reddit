import React from "react";

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