import { createSlice } from '@reduxjs/toolkit';
import { loginAction, registerAction } from './actions';
import { initialState } from './initialState';

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    cleanErrorAction: (state) => {
      return {
        ...state,
        authError: '',
        registerError: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(registerAction.fulfilled, (state) => {
        state.isLoad = false;
        state.authError = '';
        state.registerError = '';
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.isLoad = false;
        state.registerError = action.payload;
      });

    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.isLoad = false;
        state.authError = '';
        state.registerError = '';
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoad = false;
        state.authError = action.payload;
      });
  },
});

export const { cleanErrorAction } = loginSlice.actions;
