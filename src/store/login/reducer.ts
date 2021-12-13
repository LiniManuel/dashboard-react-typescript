import { createSlice } from "@reduxjs/toolkit";
import { setLogin } from "./action";

export const loginSlice = createSlice({
  initialState: { access: false },
  name: "login",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLogin, (state, { payload }) => {
      state.access = payload;
    });
  },
});
