import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './product/slice';
import { loginSlice } from './login/slice';
import { shopCartSlice } from './shopCart/slice';
import { isGetProductSlice } from './isGetProduct/slice';

export const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    productReducer: productSlice.reducer,
    shopCartReducer: shopCartSlice.reducer,
    isGetProductReducer: isGetProductSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
