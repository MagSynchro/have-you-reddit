import { configureStore } from "@reduxjs/toolkit";
// import reducers
import subredditsReducer from "../features/subreddits/subredditsSlice.js";
import postsReducer from "../features/posts/postsSlice.js";


export default configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,    

  },
});
