import { createSlice } from "@reduxjs/toolkit";

const jsonDataSlice = createSlice({
  name: "jsonData",
  initialState: [],
  reducers: {
    addJson(state, action) {
      return action.payload;
    },
  },
});

export const { addJson } = jsonDataSlice.actions;
export const jsonDataReducer = jsonDataSlice.reducer;
