import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import showsReducer from "./showsSlice"
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        shows: showsReducer,
        movies: moviesReducer,
        gpt: gptReducer,
    },
});

export default appStore;