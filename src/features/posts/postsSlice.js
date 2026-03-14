// slice to get post objects from json data passed in from a completed search or a default search for Popular.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { redditFetch } from "../../utils/redditFetch.js";

// Async thunk to fetch posts from Reddit
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ subreddit = "popular", sort = "hot", before = "", after = "" } = {}) => {
    const json = await redditFetch({ subreddit, sort, after });
    return {
      posts: json.data.children.map(child => ({
        id: child.data.id,
        title: child.data.title,
        author: child.data.author,
        subreddit: child.data.subreddit,
        url: child.data.url,
        thumbnail: child.data.thumbnail,
        num_comments: child.data.num_comments,
        ups: child.data.ups
      })),
      after: json.data.after,
    };
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: false,
    after: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.posts;
        state.after = action.payload.after;        
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectPostsLoading = (state) => state.posts.isLoading;
export const selectPostsError = (state) => state.posts.error;
export const selectAfter = (state) => state.posts.after;

export default postsSlice.reducer;