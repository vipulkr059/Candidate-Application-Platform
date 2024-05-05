import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";
import filterReducer from "./features/filterSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    filter: filterReducer,
  },
});

export default store;
