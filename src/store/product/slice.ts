import { createSlice } from "@reduxjs/toolkit";
import { createProductAction, deleteProductAction, editProductAction, getProductAction, getProductByIdAction } from "./actions";
import { initialState } from './initialState'

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductAction.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoad = false;
      state.error = ''
    })
      .addCase(getProductAction.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoad = false;
    })
      .addCase(getProductAction.pending, (state) => {
      state.isLoad = true;
    })

    builder
      .addCase(getProductByIdAction.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoad = false;
        state.error = ''
      })
      .addCase(getProductByIdAction.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoad = false;
      })
      .addCase(getProductByIdAction.pending, (state) => {
        state.isLoad = true;
      })

    builder
      .addCase(createProductAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = ''
      })
      .addCase(createProductAction.rejected, (state, action) => {
        state.error = action.payload
        state.isLoad = false;
      })
      .addCase(createProductAction.pending, (state) => {
        state.isLoad = true;
      })

    builder
      .addCase(editProductAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = ''
      })
      .addCase(editProductAction.rejected, (state, action) => {
        state.error = action.payload
        state.isLoad = false;
      })
      .addCase(editProductAction.pending, (state) => {
        state.isLoad = true;
      })

    builder
      .addCase(deleteProductAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = ''
      })
      .addCase(deleteProductAction.rejected, (state, action) => {
        state.error = action.payload
        state.isLoad = false;
      })
      .addCase(deleteProductAction.pending, (state) => {
        state.isLoad = true;
      })
  }
})