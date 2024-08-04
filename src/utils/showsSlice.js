import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
    name: "shows",
    initialState: {
        allShows: null,
    },
    reducers: {
        addAllShows: (state, action) => {
            state.allShows = action.payload;
        },
    },
});

export const {addAllShows} = showsSlice.actions;

export default showsSlice.reducer;