import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducer/CounterReducer";

const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

export default store