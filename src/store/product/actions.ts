import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";
import { ProductType, editProductActionArgs, createProductActionArgs } from "../../Types/types";

const getProductAction = createAsyncThunk<ProductType[], undefined, { rejectValue: string }>(
  'product/getProductAction',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('product/')
      return response.data as ProductType[]
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузке товаров!')
    }
  } 
)

const getProductByIdAction = createAsyncThunk<ProductType, string, { rejectValue: string }>(
  'product/getProductByIdAction',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`product/${id}/`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузке товара!')
    }
  } 
)

const editProductAction = createAsyncThunk<ProductType, editProductActionArgs, { rejectValue: string }>(
  'product/editProductdAction',
  async ({navigate, ...data}, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`product/${data.id}/`, data)
      navigate('/')
      console.log(response.data)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при редактировании товаров!')
    }
  }
)

const createProductAction = createAsyncThunk<undefined, createProductActionArgs, { rejectValue: string }>(
  'product/createProductAction',
  async ({navigate, ...data}, thunkAPI) => {
    try {
      await axiosInstance.post('product/', data)
      navigate('/')
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при создании товара!')
    }
  }
)

const deleteProductAction = createAsyncThunk<undefined, number, { rejectValue: string }>(
  'product/deleteProductAction',
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`product/${id}/`)
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при удалении товара!')
    }
  }
)

export { getProductAction, getProductByIdAction, editProductAction, createProductAction, deleteProductAction }