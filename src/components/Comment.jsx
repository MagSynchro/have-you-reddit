import React from "react";
import { formatNumber, removeAmp } from "../utils/helpers";

export default function Comment({comment, depth = 0}) {
    if (!comment || comment.kind !== "t1") return null;

    const {body, author, score, replies} = comment.data;
    //find urls for images and links in the data.
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = body.split(urlRegex);

    //Get replies to comments, but if not there, then default to empty obect.
    const nestedReplies = replies?.data?.children || [];

    return (
       <div style={{ marginLeft: depth * 10 + "px", borderLeft: depth ? "1px solid #ddd" : "none", paddingLeft: depth ? "10px" : "0" }}>
        
        <p><strong>{author}</strong></p>
        <p>
           {parts.map((part, i) => {
            const cleanPart = removeAmp(part);
            if (urlRegex.test(part)) {
            // If it ends with an image extension
            if (/\.(jpeg|jpg|png|gif)(\?|$)/i.test(cleanPart)) {
                return <img key={i} src={cleanPart} alt="inline" style={{ maxWidth: "50%", margin: "10px 0" }} />;
            }
            // If it's a Reddit video link (simplified)
            if (/v\.redd\.it/.test(part)) {
              return (
                <video key={i} controls style={{ maxWidth: "50%", margin: "10px 0" }}>
                  <source src={cleanPart} type="video/mp4" />
                </video>
              );
            }
            // Otherwise, render as a clickable link
            return <a key={i} href={cleanPart} target="_blank" rel="noopener noreferrer">{cleanPart}</a>;
          }
          return cleanPart; // plain text
        })}

        </p>
        <p>⬆{formatNumber(score)}</p>         

        {nestedReplies.map((reply) => (
            <Comment key={reply.data?.id || Math.random()} comment={reply} depth={depth + 1} />
        ))}
       </div> 
    )
}