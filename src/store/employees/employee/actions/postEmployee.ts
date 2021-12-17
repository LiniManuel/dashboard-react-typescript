import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../..";

export const postEmployee = createAsyncThunk(
  "fetch/employee",
  async (employees: Omit<Employee, "id">) => {
    try {
      const response = await fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employees),
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
