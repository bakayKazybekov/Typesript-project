import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api';
import { BASE_ROUTER } from '../../consts/paths';

type LoginArgs = {
  navigate: (path: string) => void;
  username: string;
  password: string;
};

const registerAction = createAsyncThunk<undefined, LoginArgs, { rejectValue: string }>(
  'register/registerAction',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('register/', data);
      navigate(BASE_ROUTER);
      localStorage.setItem('token', response.data.token);
    } catch (e: any) {
      if (e.response.status === 400) {
        return thunkAPI.rejectWithValue('Пользователь с таким логином уже существует');
      } else {
        return thunkAPI.rejectWithValue('Произошла ошибка при регистрации!');
      }
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
    } catch (e: any) {
      if (e.response.status === 401) {
        return thunkAPI.rejectWithValue('Неверные данные');
      } else {
        return thunkAPI.rejectWithValue('Произошла ошибка при авторизации!');
      }
    }
  },
);

export { registerAction, loginAction };
