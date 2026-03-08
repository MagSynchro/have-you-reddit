import { configureStore } from "@reduxjs/toolkit";
// import reducers
import postsReducer from "../features/posts/postsSlice.js";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
