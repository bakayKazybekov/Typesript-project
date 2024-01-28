import { createSlice } from '@reduxjs/toolkit';
import { loginAction, registerAction } from './actions';
import { initialState } from './initialState';

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(registerAction.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      });

    builder
      .addCase(loginAction.fulfilled, (state) => {
        state.isLoad = false;
        state.error = '';
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      });
  },
});

export { loginSlice };
