import { createSlice } from "@reduxjs/toolkit";
import { InitialStateEmployee } from "../../types";
import { deleteEmployee, postEmployee } from "../actions";
const initialState: InitialStateEmployee = {
  data: null,
  loading: false,
  error: "",
};
export const postEmployeeSlice = createSlice({
  initialState,
  name: "employee",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postEmployee.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(postEmployee.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postEmployee.rejected, (state) => {
        state.loading = false;
        state.error = "error call";
      })
      .addCase(deleteEmployee.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteEmployee.rejected, (state) => {
        state.loading = false;
        state.error = "error call";
      });
  },
});
