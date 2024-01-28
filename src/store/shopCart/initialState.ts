import { ProductState, ShopCartProductType } from '../../Types/types';

type ShopCartState = {
  shopCart: ShopCartProductType[];
  isLoad: boolean;
  error?: string;
};

export const initialState: ShopCartState = {
  shopCart: [],
  isLoad: false,
  error: '',
};
