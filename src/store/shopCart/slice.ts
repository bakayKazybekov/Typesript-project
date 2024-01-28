import { createSlice } from '@reduxjs/toolkit';
import { getShopCartProductsAction } from './actions';
import { initialState } from './initialState';

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShopCartProductsAction.fulfilled, (state, action) => {
        state.shopCart = action.payload;
        state.isLoad = false;
        state.error = '';
      })
      .addCase(getShopCartProductsAction.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoad = false;
      })
      .addCase(getShopCartProductsAction.pending, (state) => {
        state.isLoad = true;
      });
  },
});
