import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/reducers";
import { counterSlice } from "./counter/reducers";
import { fetchPostsSlice } from "./posts/reducers";
import { fetchUsersSlice } from "./users/reducers";
import { fetchEmployeesSlice, postEmployeeSlice } from "./employees";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    counter: counterSlice.reducer,
    post: fetchPostsSlice.reducer,
    user: fetchUsersSlice.reducer,
    employees: fetchEmployeesSlice.reducer,
    employee: postEmployeeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
