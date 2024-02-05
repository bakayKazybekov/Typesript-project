import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api';
import { BASE_ROUTER } from '../../consts/paths';

type LoginArgs = {
  navigate: (path: string) => void;
  username: string;
  password: string;
};

const registerAction = createAsyncThunk<undefined, LoginArgs, { rejectValue: string }>(
  'login/registerAction',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('register/', data);
      navigate(BASE_ROUTER);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка при регистрации!');
    }
  },
);

const loginAction = createAsyncThunk<undefined, LoginArgs, { rejectValue: string }>(
  'login/loginAction',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('login/', data);
      navigate(BASE_ROUTER);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка при авторизации!');
    }
  },
);

export { registerAction, loginAction };
