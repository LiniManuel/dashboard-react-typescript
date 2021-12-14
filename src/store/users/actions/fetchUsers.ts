import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetch/users", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();

    if (response.ok) {
      return data;
    }

    return "error";
  } catch (error) {
    console.log(error);
  }
});
