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
  const { shopCart, isLoad, error } = useAppSelector((state) => state.shopCartReducer);

  // Confirm modal states
  const [deleteProduct, setDeleteProduct] = useState<{ title: string; id: number }>({ title: '', id: 0 });
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false);
  const [clearConfirmIsOpen, setClearConfirmIsOpen] = useState<boolean>(false);

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) dispatch(getShopCartProductsAction());
  }, [dispatch, getShopCartProductsAction, token]);

  const addCart = useCallback(
    (product: ProductType) => {
      dispatch(addShopCartProductsAction({ product: product.id, quantity: 1 }))
        .then(() => dispatch(getShopCartProductsAction()))
        .catch(() => dispatch(getShopCartProductsAction()));
    },
    [dispatch],
  );

  const deleteFromCart = useCallback(() => {
    if (deleteProduct.id) {
      dispatch(deleteShopCartProductsAction(deleteProduct.id))
        .then(() => dispatch(getShopCartProductsAction()))
        .catch(() => dispatch(getShopCartProductsAction()));
    }
  }, [dispatch, deleteProduct]);

  const clearShopCart = useCallback(() => {
    dispatch(removeAllShopCartProductsAction())
      .then(() => dispatch(getShopCartProductsAction()))
      .catch(() => dispatch(getShopCartProductsAction()));
  }, [dispatch]);

  return (
    <ShopCartComponent
      shopCartProducts={shopCart}
      addCart={addCart}
      deleteFromCart={deleteFromCart}
      deleteProduct={deleteProduct}
      setDeleteProduct={setDeleteProduct}
      confirmIsOpen={confirmIsOpen}
      setConfirmIsOpen={setConfirmIsOpen}
      clearShopCart={clearShopCart}
      clearConfirmIsOpen={clearConfirmIsOpen}
      setClearConfirmIsOpen={setClearConfirmIsOpen}
      isLoad={isLoad}
      error={error}
      token={token}
    />
  );
};

export default ShopCartContainer;
