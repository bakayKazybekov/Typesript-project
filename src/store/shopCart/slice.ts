import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { pendingAction, rejectedAction } from '../utils';
import {
  addShopCartProductsAction,
  deleteShopCartAction,
  getShopCartProductsAction,
  removeAllShopCartAction,
} from './actions';
import { initialState } from './initialState';

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    setQuantity: (state, { payload }) => {
      return {
        ...state,
        shopCart: _.map(state.shopCart, ({ product, quantity }) => {
          if (product.id === payload) {
            return { product, quantity: quantity + 1 };
          } else {
            return { product, quantity };
          }
        }),
      };
    },
    resetQuantity: (state, { payload }) => {
      return {
        ...state,
        shopCart: _.map(state.shopCart, ({ product, quantity }) => {
          if (product.id === payload.product) {
            return {
              product,
              quantity: quantity - payload.quantity,
            };
          } else {
            return { product, quantity };
          }
        }),
      };
    },
    deleteShopCartProduct: (state, { payload }) => {
      return {
        ...state,
        shopCart: _.filter(state.shopCart, (shopCartItem) => shopCartItem.product.id !== payload),
      };
    },
    clearShopCart: (state) => {
      return {
        ...state,
        shopCart: [],
      };
    },
    cleanShopCartError: (state) => {
      return {
        ...state,
        error: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShopCartProductsAction.pending, pendingAction)
      .addCase(getShopCartProductsAction.fulfilled, (state, action) => {
        state.shopCart = action.payload;
        state.isLoad = false;
        state.error = '';
      })
      .addCase(getShopCartProductsAction.rejected, rejectedAction);
    builder
      .addCase(addShopCartProductsAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(addShopCartProductsAction.rejected, rejectedAction);
    builder
      .addCase(deleteShopCartAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(deleteShopCartAction.rejected, rejectedAction);
    builder
      .addCase(removeAllShopCartAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(removeAllShopCartAction.rejected, rejectedAction);
  },
});

export const { setQuantity, resetQuantity, deleteShopCartProduct, clearShopCart, cleanShopCartError } =
  shopCartSlice.actions;
