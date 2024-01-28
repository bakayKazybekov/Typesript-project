import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShopCartComponent from '../../components/ShopCartComponent/ShopCartComponent';
import { useAppDispatch, useAppSelector } from '../../hook';
import {
  addShopCartProductsAction,
  deleteShopCartProductsAction,
  getShopCartProductsAction,
  removeAllShopCartProductsAction,
} from '../../store/shopCart/actions';
import { ProductType, ShopCartProductType } from '../../Types/types';

// https://www.npmjs.com/package/redux-persist

const ShopCartContainer = () => {
  const dispatch = useAppDispatch();
  const [action, setAction] = useState<boolean>(false);
  const { shopCart, isLoad, error } = useAppSelector((state) => state.shopCartReducer);
  console.log('shopCartProducts', shopCart);

  useEffect(() => {
    dispatch(getShopCartProductsAction());
  }, [dispatch, getShopCartProductsAction, action]);

  const addCart = (product: ProductType) => {
    dispatch(addShopCartProductsAction({ product: product.id, quantity: 1 }))
      .then(() => dispatch(getShopCartProductsAction()))
      .catch(() => dispatch(getShopCartProductsAction()));
  };
  // useEffect(() => {
  //   const getProductsFromLocal = localStorage.getItem('products');
  //   if (getProductsFromLocal) {
  //     const products = JSON.parse(getProductsFromLocal);
  //     setProducts(products);
  //   }
  // }, []);

  const deleteFromCart = (id: number) => {
    dispatch(deleteShopCartProductsAction(id))
      .then(() => dispatch(getShopCartProductsAction()))
      .catch(() => dispatch(getShopCartProductsAction()));
  };

  const clearShopCart = () => {
    dispatch(removeAllShopCartProductsAction())
      .then(() => dispatch(getShopCartProductsAction()))
      .catch(() => dispatch(getShopCartProductsAction()));
  };

  return (
    <ShopCartComponent
      shopCartProducts={shopCart}
      isLoad={isLoad}
      error={error}
      addCart={addCart}
      deleteFromCart={deleteFromCart}
      clearShopCart={clearShopCart}
    />
  );
};

export default ShopCartContainer;
