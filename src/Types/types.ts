// Product
export type ProductType = {
  title: string;
  description: string;
  price: string;
  image?: string;
  id: number;
};

export type ShopCartProductType = {
  product: ProductType;
  quantity: number;
};

export type addShopCartProductType = {
  product: number | ProductType; // ???
  quantity: number;
};

export type createProductActionArgs = Omit<ProductType, 'id'> & {
  navigate: (path: string) => void;
};

export type editProductActionArgs = createProductActionArgs & {
  id: string;
};

// FormValues
export type ProductFormValues = Omit<ProductType, 'image' | 'id'>;

export type LoginFormValues = {
  username: string;
  password: string;
  confirmPassword?: string;
};

// Omit, Required, Partial, Pick, Record<string, string>;
export type ShopCartProps = {
  products: ShopCartProductType[];
  onDelete: (id: number) => void;
  onClear: () => void;
};

// Store
export type ProductState = {
  products: ProductType[];
  product: ProductType;
  isLoad: boolean;
  error?: string;
};

export type LoginState = Pick<ProductState, 'isLoad'> & {
  registerError?: string;
  authError?: string;
};

export enum AlertState {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}
