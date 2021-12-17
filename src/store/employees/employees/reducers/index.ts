import { createSlice } from "@reduxjs/toolkit";
import { InitialStateEmployees } from "../../types";
import { fetchEmoployees } from "../actions";
const initialState: InitialStateEmployees = {
  data: [],
  loading: false,
  error: "",
};
export const fetchEmployeesSlice = createSlice({
  initialState,
  name: "employees",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmoployees.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchEmoployees.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchEmoployees.rejected, (state) => {
        state.loading = false;
        state.error = "error call";
      });
  },
});
