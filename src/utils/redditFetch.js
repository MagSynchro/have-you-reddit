import { isDev } from "./env.js"; // helper we'll create next

export async function redditFetch({ subreddit, sort, after, postId, query }) {
  if (isDev) {
    // DEV: fetch directly via Vite proxy
    if (query) {
      return fetch(`/reddit/search.json?q=${encodeURIComponent(query)}`).then(res => res.json());
    } else if (postId) {
      return fetch(`/reddit/r/${subreddit}/comments/${postId}.json`).then(res => res.json());
    } else {
      return fetch(`/reddit/r/${subreddit}/${sort}.json${after ? `?after=${after}` : ""}`).then(res => res.json());
    }
  } else {
    // PROD: fetch via Netlify function
    const params = new URLSearchParams();
    if (subreddit) params.append("subreddit", subreddit);
    if (sort) params.append("sort", sort);
    if (after) params.append("after", after);
    if (postId) params.append("postId", postId);
    if (query) params.append("query", query);

    return fetch(`/api/reddit?${params.toString()}`).then(res => res.json());
  }
}