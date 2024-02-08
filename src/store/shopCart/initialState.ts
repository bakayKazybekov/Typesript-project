import { ShopCartProductType } from '../../Types/types';

export type ShopCartState = {
  shopCart: ShopCartProductType[];
  isLoad: boolean;
  error?: string;
};

export const initialState: ShopCartState = {
  shopCart: [],
  isLoad: false,
  error: '',
};
