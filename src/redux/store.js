import { configureStore } from "@reduxjs/toolkit";
import сartSlice from "./сartSlice";


const store = configureStore({
  reducer: {
    cart: сartSlice,
  }
});

export default store;