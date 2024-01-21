import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api';
import { BASE_ROUTER } from '../../consts/paths';
import {
  ProductType,
  editProductActionArgs,
  createProductActionArgs,
  deleteProductActionArgs,
} from '../../Types/types';

const getProductAction = createAsyncThunk<ProductType[], undefined, { rejectValue: string }>(
  'product/getProductAction',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('product/');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузке товаров!');
    }
  },
);

const getProductByIdAction = createAsyncThunk<ProductType, string, { rejectValue: string }>(
  'product/getProductByIdAction',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`product/${id}/`);
      return response.data;
    } catch (_) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузке товара!');
    }
  },
);

const editProductAction = createAsyncThunk<ProductType, editProductActionArgs, { rejectValue: string }>(
  'product/editProductdAction',
  async ({ navigate, ...values }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put(`product/${values.id}/`, values);
      navigate(BASE_ROUTER);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при редактировании товаров!');
    }
  },
);

const createProductAction = createAsyncThunk<undefined, createProductActionArgs, { rejectValue: string }>(
  'product/createProductAction',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      await axiosInstance.post('product/', data);
      navigate(BASE_ROUTER);
    } catch (_) {
      return thunkAPI.rejectWithValue('Произошла ошибка при создании товара!');
    }
  },
);

const deleteProductAction = createAsyncThunk<undefined, deleteProductActionArgs, { rejectValue: string }>(
  'product/deleteProductAction',
  async ({ navigate, id }, thunkAPI) => {
    try {
      await axiosInstance.delete(`product/${id}/`);
      navigate(BASE_ROUTER);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при удалении товара!');
    }
  },
);

export { getProductAction, getProductByIdAction, editProductAction, createProductAction, deleteProductAction };