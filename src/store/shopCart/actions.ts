import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api';
import { addShopCartProductType, ShopCartProductType } from '../../Types/types';

const getShopCartProductsAction = createAsyncThunk<ShopCartProductType[], undefined, { rejectValue: string }>(
  'shopCart/getShopCartProductsAction',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('get-cart/');
      return response.data.cart;
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузке товаров!');
    }
  },
);

const addShopCartProductsAction = createAsyncThunk<undefined, addShopCartProductType, { rejectValue: string }>(
  'shopCart/addShopCartProductsAction',
  async (data, thunkAPI) => {
    try {
      await axiosInstance.post('add-cart/', data);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при добавлении в корзину!');
    }
  },
);

const deleteShopCartProductsAction = createAsyncThunk<undefined, number, { rejectValue: string }>(
  'shopCart/deleteShopCartProductsAction',
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`remove-from-cart/${id}/`);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при добавлении в корзину!');
    }
  },
);

const removeAllShopCartProductsAction = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
  'shopCart/deleteShopCartProductsAction',
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`remove-all/`);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при добавлении в корзину!');
    }
  },
);

export {
  getShopCartProductsAction,
  addShopCartProductsAction,
  deleteShopCartProductsAction,
  removeAllShopCartProductsAction,
};
