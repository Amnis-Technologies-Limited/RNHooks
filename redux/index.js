import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducer/CounterReducer";
import BlogReducer from "./reducer/BlogReducer";

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        blog: BlogReducer
    }
})

export default store