import { ChangeEvent } from 'react';
import { ProductType } from '../../Types/types';

export type HomeComponentProps = ProductsListProps & InteractionProps;

export type ProductsListProps = {
  products: ProductType[];
  onDelete: () => void;
  setDeleteId: (id: number) => void;
  confirmModalIsOpen: boolean;
  setConfirmModalIsOpen: (state: boolean) => void;
  shopCartAlert: boolean;
  addCart: (product: ProductType) => void;
  token: string | null;
};

export type InteractionProps = {
  onSubmitSearch: (data: { search: string }) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  filters: (operator: string) => void;
};

export type CreateButtonProps = Pick<ProductsListProps, 'token'>;
