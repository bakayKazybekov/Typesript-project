import { ProductType, ShopCartProductType } from '../../Types/types';

export type ShopCartComponentProps = ShopCartProductListProps & ShopCartHeaderProps;

export type ShopCartProductListProps = {
  shopCartProducts: ShopCartProductType[];
  addCart: (product: ProductType) => void;
  deleteFromCart: () => void;
  setDeleteId: (id: number) => void;
  deleteProductTitle: string;
  setDeleteProductTitle: (title: string) => void;
  confirmModalIsOpen: boolean;
  setConfirmModalIsOpen: (state: boolean) => void;
  isLoad: boolean;
  error?: string;
  token: string | null;
};
export type ShopCartHeaderProps = {
  clearConfirmModalIsOpen: boolean;
  setClearConfirmModalIsOpen: (state: boolean) => void;
  clearShopCart: () => void;
  productsLength?: number;
};
