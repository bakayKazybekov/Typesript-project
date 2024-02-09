import { ProductType, ShopCartProductType } from '../../Types/types';

export type ShopCartComponentProps = ShopCartProductListProps & ShopCartHeaderProps;

export type ShopCartProductListProps = {
  shopCartProducts: ShopCartProductType[];
  addCart: (shopCart: ShopCartProductType) => void;
  deleteFromCart: () => void;
  deleteProduct: { title: string; id: number };
  setDeleteProduct: (product: { title: string; id: number }) => void;
  confirmIsOpen: boolean;
  setConfirmIsOpen: (state: boolean) => void;
  isLoad: boolean;
};

export type ShopCartHeaderProps = {
  clearConfirmIsOpen: boolean;
  onCloseError: () => void;
  setClearConfirmIsOpen: (state: boolean) => void;
  clearShopCart: () => void;
  productsLength?: number;
  token: string | null;
  error?: string;
};
