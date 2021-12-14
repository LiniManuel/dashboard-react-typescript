import { createSlice } from "@reduxjs/toolkit";
import { FetchUsersInitialState } from "../types";
import { fetchUsers } from "../actions";
const initialState: FetchUsersInitialState = {
  data: [],
  loading: false,
  error: "",
};
export const fetchUsersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchUsers.pending, (state, { payload }) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = "error call";
      });
  },
});
