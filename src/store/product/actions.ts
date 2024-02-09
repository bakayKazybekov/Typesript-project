import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api';
import { BASE_ROUTER } from '../../consts/paths';
import { ProductType, editProductActionArgs, createProductActionArgs } from '../../Types/types';
import { createProduct, deleteProductById, editProduct } from './slice';

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

const editProductAction = createAsyncThunk<undefined, editProductActionArgs, { rejectValue: string }>(
  'product/editProductdAction',
  async ({ navigate, id, ...values }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`product/${id}/`, values);
      thunkAPI.dispatch(editProduct(response.data));
      navigate(BASE_ROUTER);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при редактировании товара!');
    }
  },
);

const createProductAction = createAsyncThunk<undefined, createProductActionArgs, { rejectValue: string }>(
  'product/createProductAction',
  async ({ navigate, ...values }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('product/', values);
      thunkAPI.dispatch(createProduct(response.data));
      navigate(BASE_ROUTER);
    } catch (_) {
      return thunkAPI.rejectWithValue('Произошла ошибка при создании товара!');
    }
  },
);

const deleteProductAction = createAsyncThunk<undefined, number, { rejectValue: string }>(
  'product/deleteProductAction',
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`product/${id}/`);
      thunkAPI.dispatch(deleteProductById(id));
    } catch (_) {
      return thunkAPI.rejectWithValue('Произошла ошибка при удалении товара!');
    }
  },
);

export { getProductAction, getProductByIdAction, editProductAction, createProductAction, deleteProductAction };
