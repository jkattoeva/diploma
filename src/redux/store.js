import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import сartSlice from "./сartSlice";


const store = configureStore({
  reducer: {
    cart: сartSlice,
    auth: authSlice,
  }
});

export default store;