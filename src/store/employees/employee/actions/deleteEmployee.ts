import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteEmployee = createAsyncThunk(
  "delete/employee",
  async (id: string) => {
    try {
      const response = await fetch("http://localhost:5000/employees/" + id, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      }

      return "error";
    } catch (error) {
      console.log(error);
    }
  }
);
