import { ProductType } from '../../Types/types';

export type ProductState = {
  products: ProductType[];
  product: ProductType;
  isLoad: boolean;
  error?: string;
};

const product = {
  title: '',
  description: '',
  price: '',
  id: 0,
};

export const initialState: ProductState = {
  products: [],
  product: product,
  isLoad: false,
  error: '',
};
