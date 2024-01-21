import { ChangeEvent } from 'react';
import { ProductType } from '../../Types/types';

export type HomeComponentProps = ProductsListProps & InteractionProps;

export type ProductsListProps = {
  products: ProductType[];
  addCart: (product: ProductType) => void;
  shopCartAlert: boolean;
  onClickShopCartButton: (product: ProductType) => void;
  token: string | null;
  isLoad: boolean;
  error?: string;
};

export type InteractionProps = {
  onSubmitSearch: (data: { search: string }) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  filters: (operator: string) => void;
};

export type CreateButtonProps = Pick<ProductsListProps, 'token'>;