import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";

const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default counterStore;
