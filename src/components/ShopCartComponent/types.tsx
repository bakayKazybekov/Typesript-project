import { ProductType, ShopCartProductType } from '../../Types/types';

export type ShopCartComponentProps = ShopCartProductListProps & ShopCartHeaderProps;

export type ShopCartProductListProps = {
  shopCartProducts: ShopCartProductType[];
  addCart: (product: ProductType) => void;
  deleteFromCart: () => void;
  setDeleteId: (id: number) => void;
  confirmModalIsOpen: boolean;
  setConfirmModalIsOpen: (state: boolean) => void;
  isLoad: boolean;
  error?: string;
};
export type ShopCartHeaderProps = {
  clearConfirmModalIsOpen: boolean;
  setClearConfirmModalIsOpen: (state: boolean) => void;
  clearShopCart: () => void;
};
