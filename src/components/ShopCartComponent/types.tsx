import { ProductType, ShopCartProductType } from '../../Types/types';

export type ShopCartComponentProps = ShopCartProductListProps & ShopCartHeaderProps;

export type ShopCartProductListProps = {
  shopCartProducts: ShopCartProductType[];
  addCart: (product: ProductType) => void;
  deleteFromCart: () => void;
  deleteProduct: { title: string; id: number };
  setDeleteProduct: (product: { title: string; id: number }) => void;
  confirmIsOpen: boolean;
  setConfirmIsOpen: (state: boolean) => void;
  isLoad: boolean;
  error?: string;
  token: string | null;
};

export type ShopCartHeaderProps = {
  clearConfirmIsOpen: boolean;
  setClearConfirmIsOpen: (state: boolean) => void;
  clearShopCart: () => void;
  productsLength?: number;
};
