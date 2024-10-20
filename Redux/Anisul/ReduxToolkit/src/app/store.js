import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postSlice";

const store = configureStore({
    reducer : {
        counter : counterReducer,
        post: postsReducer
    }
})

export default store