import { ChangeEvent, FormEvent } from "react";
import { SubmitHandler } from "react-hook-form";

// Product
type Product = {
  title: string;
  description: string;
  price: string;
  image?: string;
}

export type ProductType = Product & {
  id: number;
}

export type ShopCartProductType = Product & {
  id: number;
  uniqueId: number;
}

export type createProductActionArgs = Product & {
  navigate: (path: string) => void;
}

export type editProductActionArgs = Product & {
  navigate: (path: string) => void;
  id: string
}


// FormValues
export type ProductFormValues = {
  title: string;
  description: string;
  price: string;
  id?: number;
}

export type LoginFormValues = {
  username: string;
  password: string;
}

// Component Properties
export type HomeComponentProps = ProductsListProps & InteractionProps & {}

export type ProductsListProps = {
  products: ProductType[];
  addCart: (product: ProductType) => void;
  onDelete: (id: number) => void;
  isLoad: boolean;
  error?: string;
}

export type InteractionProps = {
  onSubmitSearch: (event: FormEvent<HTMLFormElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  filters: (operator: string) => void
}

export type CreateProductProps = {
  onSubmit: SubmitHandler<ProductFormValues>;
  onImg: () => void;
  image?: string;
  values?: ProductFormValues;
  isLoad: boolean;
  error?: string;
}

export type ProductDescriptionProps = {
  product: Product;
  isLoad: boolean;
  error?: string;
}

export type ShopCartProps = {
  products: ShopCartProductType[];
  onDelete: (id: number) => void;
  onClear: () => void;
}

// Login Properties
type LoginProps = {
  setIsRegister: (state: boolean) => void;
  isLoad: boolean; 
  error?: string;
}

type AuthData = {
  username: string;
  password: string;
}

type RegisterData = AuthData & {
  confirmPassword: string;
}

export type AuthProps = LoginProps & {
  onSubmit: SubmitHandler<AuthData>
}

export type RegisterProps = LoginProps & {
  onSubmit: SubmitHandler<RegisterData>
}

// Store
export type ProductState = {
  products: ProductType[];
  product: ProductType;
  isLoad: boolean;
  error?: string;
}

export type LoginState = {
  isLoad: boolean;
  error?: string;
}