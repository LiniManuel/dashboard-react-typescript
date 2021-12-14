import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/reducers";
import { counterSlice } from "./counter/reducers";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
