import { createSlice } from "@reduxjs/toolkit";

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    visited: ["popular"]
  },
  reducers: {

    addVisitedSubreddit: (state, action) => {
      const subreddit = action.payload.toLowerCase();

      if (!state.visited.includes(subreddit)) {
        state.visited.push(subreddit);
        if (state.visited.length > 10) {
            state.visited.shift();
        }
      }
    }

  }
});

export const { addVisitedSubreddit } = subredditsSlice.actions;

export const selectVisitedSubreddits = (state) => state.subreddits.visited;

export default subredditsSlice.reducer;