import { ChangeEvent } from 'react';
import { ProductType } from '../../Types/types';

export type HomeComponentProps = ProductsListProps & InteractionProps;

export type ProductsListProps = {
  products: ProductType[];
  onDelete: () => void;
  setDeleteId: (id: number) => void;
  deleteProductTitle: string;
  setDeleteProductTitle: (title: string) => void;
  confirmModalIsOpen: boolean;
  setConfirmModalIsOpen: (state: boolean) => void;
  shopCartAlert: boolean;
  addCart: (product: ProductType) => void;
  token: string | null;
  isLoad: boolean;
  error?: string;
};

export type InteractionProps = {
  onSubmitSearch: (data: { search: string }) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  filters: (operator: string) => void;
  onResetSearch: () => void;
  showResetButton: boolean;
  priceSortingState: boolean;
  dateSortingState: boolean;
};

export type CreateButtonProps = Pick<ProductsListProps, 'token'>;
