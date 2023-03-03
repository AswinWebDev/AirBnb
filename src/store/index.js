import { configureStore } from "@reduxjs/toolkit";
import { addJson, jsonDataReducer } from "./slices/jsonDataSlice";
import { addType, jsonTypeReducer } from "./slices/jsonTypeSlice";

const store = configureStore({
  reducer: {
    jsonData: jsonDataReducer,
    jsonType: jsonTypeReducer,
  },
});

export { store, addJson, addType };
