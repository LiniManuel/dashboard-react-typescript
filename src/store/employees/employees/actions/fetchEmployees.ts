import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmoployees = createAsyncThunk("fetch/employees", async () => {
  try {
    const response = await fetch("http://localhost:5000/employees", {
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
