// netlify/functions/reddit.js
import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const { subreddit, sort = "hot", postId, query, after } = event.queryStringParameters || {};

    let url;
    if (query) {
      url = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}`;
    } else if (postId) {
      url = `https://www.reddit.com/r/${subreddit}/comments/${postId}.json`;
    } else if (subreddit) {
      url = `https://www.reddit.com/r/${subreddit}/${sort}.json${after ? `?after=${after}` : ""}`;
    } else {
      url = `https://www.reddit.com/r/popular/hot.json`;
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": "have-you-reddit-app/0.1 by yourusername",
        "Accept": "application/json",
      },
    });

    const text = await response.text(); // get raw text first
    let data;
    try {
      data = JSON.parse(text); // try parse JSON
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Reddit returned invalid JSON", raw: text }),
      };
    }

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