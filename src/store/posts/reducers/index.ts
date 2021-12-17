import { createSlice } from "@reduxjs/toolkit";
import { FetchPostsInitialState } from "../types";
import { fetchPosts, resetPosts } from "../actions";
const initialState: FetchPostsInitialState = {
  data: [],
  loading: false,
  error: "",
};
export const fetchPostsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchPosts.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = "error call";
      })
      .addCase(resetPosts, (state) => {
        state.data = [];
        state.loading = false;
        state.error = "";
      });
  },
});
