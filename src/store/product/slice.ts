import { createSlice } from "@reduxjs/toolkit";
import { getProductAction, getProductByIdAction } from "./actions";
import { initialState } from './initialState'

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductAction.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoad = false;
    })
    builder.addCase(getProductAction.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoad = false;
    })
    builder.addCase(getProductAction.pending, (state) => {
      state.isLoad = true;
    })

    builder.addCase(getProductByIdAction.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoad = false;
    })
    builder.addCase(getProductByIdAction.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoad = false;
    })
    builder.addCase(getProductByIdAction.pending, (state) => {
      state.isLoad = true;
    })
  }
})