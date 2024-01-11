import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product/slice";
import { loginSlice } from "./login/slice";

export const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    productReducer: productSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;