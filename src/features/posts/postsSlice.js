import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [], //Will hold posts from Reddit
    isLoading: false,
    error: false,
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        //Add reducers as created here:

    },
});

//Selector to export posts
export const selectPosts = (state) => state.posts.posts;

//export reducer
export default postsSlice.reducer;
