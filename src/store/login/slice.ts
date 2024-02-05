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
      .addCase(registerAction.fulfilled, (state) => {
        state.isLoad = false;
        state.registerError = '';
      })
      .addCase(registerAction.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.isLoad = false;
        state.registerError = action.payload;
      });

    builder
      .addCase(loginAction.fulfilled, (state) => {
        state.isLoad = false;
        state.authError = '';
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoad = false;
        state.authError = action.payload;
      });
  },
});

export const { cleanErrorAction } = loginSlice.actions;
