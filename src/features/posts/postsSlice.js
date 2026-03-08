// slice to get post objects from json data passed in from a completed search or a default search for Popular.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch posts from Reddit
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (searchTerm = "popular") => {
    const response = await fetch(`https://www.reddit.com/r/${searchTerm}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const json = await response.json();
    // Map Reddit structure to simplified post objects
    return json.data.children.map((child) => ({
      id: child.data.id,
      title: child.data.title,
      author: child.data.author,
      subreddit: child.data.subreddit,
      url: child.data.url,
      thumbnail: child.data.thumbnail,
    }));
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: false,
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
        state.posts = action.payload;
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

export default postsSlice.reducer;