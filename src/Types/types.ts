// Product
export type ProductType = {
  title: string;
  description: string;
  price: string;
  image?: string;
  id: number;
};

export type ShopCartProductType = ProductType & {
  uniqueId: number;
};

export type createProductActionArgs = Omit<ProductType, 'id'> & {
  navigate: (path: string) => void;
};

export type editProductActionArgs = Omit<ProductType, 'id'> & {
  navigate: (path: string) => void;
  id: string;
};

export type deleteProductActionArgs = Pick<editProductActionArgs, 'navigate' | 'id'>;

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

export type LoginState = Pick<ProductState, 'isLoad' | 'error'> & {
  inAccount: boolean;
};
