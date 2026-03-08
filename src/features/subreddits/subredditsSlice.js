import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subreddits: [], //Will hold subreddits from Reddit
    isLoading: false,
    error: false,
}

export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        //Add reducers as created here:

    },
});

//Selector to export posts
export const selectSubreddits = (state) => state.subreddits.subreddits;

//export reducer
export default subredditsSlice.reducer;
