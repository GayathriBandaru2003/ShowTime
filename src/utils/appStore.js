import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import showsReducer from "./showsSlice"
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        shows: showsReducer,
        gpt: gptReducer,
    },
});

export default appStore;