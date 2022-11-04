import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import productSlice from "../slice/productSlice";
const store =  configureStore({
  reducer: {
    user: userReducer,
    productSlice
  },
});

export default store