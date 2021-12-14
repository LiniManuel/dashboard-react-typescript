import { createSlice } from "@reduxjs/toolkit";
import { setLogin } from "../actions/setLogin";
import { LoginInitialState } from "../types";

const initialState: LoginInitialState = { access: false };

export const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLogin, (state, { payload }) => {
      state.access = payload;
    });
  },
});
