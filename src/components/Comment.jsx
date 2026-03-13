import React from "react";
import { formatNumber, removeAmp } from "../utils/helpers";

export default function Comment({comment, depth = 0}) {
    if (!comment || comment.kind !== "t1") return null;

    const {body, author, score, replies} = comment.data;

    //Get replies to comments, but if not there, then default to empty obect.
    const nestedReplies = replies?.data?.children || [];

    return (
       <div style={{ marginLeft: depth * 20 + "px", borderLeft: depth ? "1px solid #ddd" : "none", paddingLeft: depth ? "10px" : "0" }}>
        
        <p><strong>{author}</strong></p>
        <p>{removeAmp(body)}</p>
        <p>⬆{formatNumber(score)}</p>         

        {nestedReplies.map((reply) => (
            <Comment key={reply.data?.id || Math.random()} comment={reply} depth={depth + 1} />
        ))}
       </div> 
    )
}