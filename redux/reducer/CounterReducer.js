import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    loading: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
            state.loading = true
        },
        decrement(state) {
            state.counter--;
            state.loading = false
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;