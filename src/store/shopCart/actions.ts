import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api';
import { addShopCartProductType, ShopCartProductType } from '../../Types/types';
import { cleanShopCartError, clearShopCart, deleteShopCartProduct, resetQuantity } from './slice';

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
      thunkAPI.dispatch(resetQuantity(data));
      return thunkAPI.rejectWithValue('Произошла ошибка при добавлении в корзину!');
    }
  },
);

const deleteShopCartAction = createAsyncThunk<undefined, number, { rejectValue: string }>(
  'shopCart/deleteShopCartAction',
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`remove-from-cart/${id}/`);
      thunkAPI.dispatch(deleteShopCartProduct(id));
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при удалении товара из корзины!');
    }
  },
);

const removeAllShopCartAction = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
  'shopCart/removeAllShopCartAction',
  async (_, thunkAPI) => {
    try {
      await axiosInstance.delete(`remove-all/`);
      thunkAPI.dispatch(clearShopCart());
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при очищении корзины!');
    }
  },
);

export { getShopCartProductsAction, addShopCartProductsAction, deleteShopCartAction, removeAllShopCartAction };
