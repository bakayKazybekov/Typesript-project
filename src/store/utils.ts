import { PayloadAction } from '@reduxjs/toolkit';
import { ShopCartState } from './shopCart/initialState';
import { ProductState } from './product/initialState';

export const pendingAction = (state: ProductState | ShopCartState) => {
  state.isLoad = true;
};
export const rejectedAction = (state: ProductState | ShopCartState, action: PayloadAction<string | undefined>) => {
  state.error = action.payload;
  state.isLoad = false;
};
