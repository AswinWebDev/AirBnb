import { createSlice } from "@reduxjs/toolkit";

const jsonTypeSlice = createSlice({
  name: "jsonType",
  initialState: ["nationalpark"],
  reducers: {
    addType(state, action) {
      return [action.payload];
    },
  },
});

export const { addType } = jsonTypeSlice.actions;
export const jsonTypeReducer = jsonTypeSlice.reducer;
