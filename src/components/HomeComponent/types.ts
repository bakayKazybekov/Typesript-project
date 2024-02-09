import { ChangeEvent } from 'react';
import { ProductType } from '../../Types/types';

export type HomeComponentProps = ProductsListProps & InteractionProps;

export type ProductsListProps = {
  handleProductAction: (type: string, product?: ProductType, operator?: string) => void;
  products: ProductType[] | string;
  deleteProduct: { title: string; id: number };
  setDeleteProduct: (product: { title: string; id: number }) => void;
  confirmIsOpen: boolean;
  setConfirmIsOpen: (state: boolean) => void;
  shopCartAlert: boolean;
  token: string | null;
  isLoad: boolean;
};

export type InteractionProps = SearchProps &
  SortingProps &
  Pick<ProductsListProps, 'products'> & {
    error?: string;
  };

export type SearchProps = {
  onSubmitSearch: (data: { search: string }) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  showResetButton: boolean;
} & Pick<ProductsListProps, 'handleProductAction'>;

export type SortingProps = {
  priceSortingState: boolean;
  dateSortingState: boolean;
} & Pick<ProductsListProps, 'handleProductAction'>;

export type CreateButtonProps = Pick<ProductsListProps, 'token'>;
