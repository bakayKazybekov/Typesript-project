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
  const [deleteId, setDeleteId] = useState<number>(0);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const [clearConfirmModalIsOpen, setClearConfirmModalIsOpen] = useState<boolean>(false);

  const { shopCart, isLoad, error } = useAppSelector((state) => state.shopCartReducer);

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) dispatch(getShopCartProductsAction());
  }, [dispatch, getShopCartProductsAction, token]);

  const addCart = (product: ProductType) => {
    dispatch(addShopCartProductsAction({ product: product.id, quantity: 1 }))
      .then(() => dispatch(getShopCartProductsAction()))
      .catch(() => dispatch(getShopCartProductsAction()));
  };

  const deleteFromCart = () => {
    if (deleteId) {
      dispatch(deleteShopCartProductsAction(deleteId))
        .then(() => dispatch(getShopCartProductsAction()))
        .catch(() => dispatch(getShopCartProductsAction()));
    }
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
      setDeleteId={setDeleteId}
      confirmModalIsOpen={confirmModalIsOpen}
      setConfirmModalIsOpen={setConfirmModalIsOpen}
      clearShopCart={clearShopCart}
      clearConfirmModalIsOpen={clearConfirmModalIsOpen}
      setClearConfirmModalIsOpen={setClearConfirmModalIsOpen}
      token={token}
    />
  );
};

export default ShopCartContainer;
