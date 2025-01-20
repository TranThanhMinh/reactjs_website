import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;