import { ProductState } from "../../Types/types";

const product = {
  title: '',
  description: '',
  price: '',
  id: 0
}

export const initialState: ProductState = {
  products: [],
  product: product,
  isLoad: false,
  error: '',
}