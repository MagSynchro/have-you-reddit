import { configureStore } from "@reduxjs/toolkit";
// import reducers
import subredditsReducer from "../features/subreddits/subredditsSlice.js";
import postsReducer from "../features/posts/postsSlice.js";
import commentsReducer from "../features/comments/commentsSlice.js";


export default configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
    comments: commentsReducer,

  },
});
