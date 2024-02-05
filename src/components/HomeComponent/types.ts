import { ChangeEvent } from 'react';
import { ProductType } from '../../Types/types';

export type HomeComponentProps = ProductsListProps & InteractionProps;

export type ProductsListProps = {
  handleProductAction: (type: string, product?: ProductType, operator?: string) => void;
  products: ProductType[];
  deleteProduct: { title: string; id: number };
  setDeleteProduct: (product: { title: string; id: number }) => void;
  confirmIsOpen: boolean;
  setConfirmIsOpen: (state: boolean) => void;
  shopCartAlert: boolean;
  token: string | null;
  isLoad: boolean;
  error?: string;
};

export type InteractionProps = {
  handleProductAction: (type: string, product?: ProductType, operator?: string) => void;
  onSubmitSearch: (data: { search: string }) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  showResetButton: boolean;
  priceSortingState: boolean;
  dateSortingState: boolean;
};

export type CreateButtonProps = Pick<ProductsListProps, 'token'>;
