// netlify/functions/reddit.js
import fetch from "node-fetch"; // only needed for Node <18

export async function handler(event, context) {
  try {
    const { subreddit, sort = "hot", postId, query, after } = event.queryStringParameters;

    let url = "";

    if (query) {
      url = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}`;
    } else if (postId) {
      url = `https://www.reddit.com/r/${subreddit}/comments/${postId}.json`;
    } else if (subreddit) {
      url = `https://www.reddit.com/r/${subreddit}/${sort}.json${after ? `?after=${after}` : ""}`;
    } else {
      url = `https://www.reddit.com/r/popular/hot.json`;
    }

    console.log("Fetching URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}