import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [], //Will hold commnets from Reddit
    isLoading: false,
    error: false,
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        //Add reducers as created here:

    },
});

//Selector to export posts
export const selectComments = (state) => state.comments.comments;

//export reducer
export default commentsSlice.reducer;