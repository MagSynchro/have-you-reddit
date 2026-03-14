import { createSlice } from "@reduxjs/toolkit";

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    visited: ["popular"]
  },
  reducers: {

    addVisitedSubreddit: (state, action) => {
        const subreddit = action.payload.toLowerCase();

        // remove if it already exists so we can move it to the end
        state.visited = state.visited.filter((sub) => sub !== subreddit);
        // add newest visit
        state.visited.push(subreddit);
        // keep list at last 10 subreddits visited.
        if (state.visited.length > 10) {
        state.visited.shift();
        }
    }

  }
});

export const { addVisitedSubreddit } = subredditsSlice.actions;

export const selectVisitedSubreddits = (state) => state.subreddits.visited;

export default subredditsSlice.reducer;