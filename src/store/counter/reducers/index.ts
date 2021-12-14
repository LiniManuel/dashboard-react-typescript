import { createSlice } from "@reduxjs/toolkit";
import { setDecrement } from "../actions/setDecrement";
import { setIncrement } from "../actions/setIncrement";
import { CounterInitialState } from "../types";

const initialState: CounterInitialState = { value: 0 };

export const counterSlice = createSlice({
  initialState,
  name: "login",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setIncrement, (state) => {
      state.value += 1;
    });
    builder.addCase(setDecrement, (state) => {
      state.value -= 1;
    });
  },
});
