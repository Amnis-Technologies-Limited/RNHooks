import { get } from "../../helper/apiClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const allPosts = createAsyncThunk("allPosts", async () => {
    const result = await get("posts");
    console.log('All posts: ', result)
    return result
})

const blogReducer = createSlice({
    name: "blog",
    initialState: {
        loading: false,
        blogs: [],
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder.addCase(allPosts.pending, (state, action) => {
            state.loading = true;
            state.status = 'idle'
        })
        builder.addCase(allPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.blogs = action?.payload?.data
        })
        builder.addCase(allPosts.rejected, (state, action) => {
            state.loading = false;
            state.blogs = []
        })
    }
})

export default blogReducer.reducer