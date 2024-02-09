import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import {
  createProductAction,
  deleteProductAction,
  editProductAction,
  getProductAction,
  getProductByIdAction,
} from './actions';
import { initialState } from './initialState';
import { pendingAction, rejectedAction } from '../utils';

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    editProduct: (state, { payload }) => {
      const newProducts = _.map(state.products, (product) => (product.id === payload.id ? payload : product));
      console.log('newProducts', newProducts);
      return {
        ...state,
        products: newProducts,
      };
    },
    createProduct: (state, action) => {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
    deleteProductById: (state, action) => {
      return {
        ...state,
        products: _.filter(state.products, (product) => product.id !== action.payload),
      };
    },
    clearProductsError: (state) => {
      return {
        ...state,
        error: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductAction.pending, pendingAction)
      .addCase(getProductAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoad = false;
        state.error = '';
      })
      .addCase(getProductAction.rejected, rejectedAction);
    builder
      .addCase(getProductByIdAction.pending, pendingAction)
      .addCase(getProductByIdAction.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoad = false;
        state.error = '';
      })
      .addCase(getProductByIdAction.rejected, rejectedAction);
    builder
      .addCase(createProductAction.pending, pendingAction)
      .addCase(createProductAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(createProductAction.rejected, rejectedAction);
    builder
      .addCase(editProductAction.pending, pendingAction)
      .addCase(editProductAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(editProductAction.rejected, rejectedAction);
    builder
      .addCase(deleteProductAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(deleteProductAction.rejected, rejectedAction);
  },
});

export const { deleteProductById, clearProductsError, createProduct, editProduct } = productSlice.actions;
