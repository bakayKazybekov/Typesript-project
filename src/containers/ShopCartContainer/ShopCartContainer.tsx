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
  const [deleteId, setDeleteId] = useState<number>(0);
  const [deleteProductTitle, setDeleteProductTitle] = useState<string>('');
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const [clearConfirmModalIsOpen, setClearConfirmModalIsOpen] = useState<boolean>(false);

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) dispatch(getShopCartProductsAction());
  }, [dispatch, getShopCartProductsAction, token]);

  const handleShopCartAction = async (action: () => Promise<void>) => {
    try {
      await action();
      dispatch(getShopCartProductsAction());
    } catch (_) {
      dispatch(getShopCartProductsAction());
    }
  };

  const addCart = async (product: ProductType) => {
    try {
      await dispatch(addShopCartProductsAction({ product: product.id, quantity: 1 }));
      dispatch(getShopCartProductsAction());
    } catch (e) {
      console.error('Ошибка при добавлении в корзину:', e);
      dispatch(getShopCartProductsAction());
    }
  };

  const deleteFromCart = async () => {
    if (deleteId) {
      try {
        await dispatch(deleteShopCartProductsAction(deleteId));
        dispatch(getShopCartProductsAction());
      } catch (e) {
        console.error('Ошибка при удалении из корзины:', e);
        dispatch(getShopCartProductsAction());
      }
    }
  };

  const clearShopCart = async () => {
    try {
      await dispatch(removeAllShopCartProductsAction());
      dispatch(getShopCartProductsAction());
    } catch (e) {
      console.error('Ошибка при очистке корзины:', e);
      dispatch(getShopCartProductsAction());
    }
  };
  // const addCart = (product: ProductType) => {
  //   dispatch(addShopCartProductsAction({ product: product.id, quantity: 1 }))
  //     .then(() => dispatch(getShopCartProductsAction()))
  //     .catch(() => dispatch(getShopCartProductsAction()));
  // };

  // const deleteFromCart = () => {
  //   if (deleteId) {
  //     dispatch(deleteShopCartProductsAction(deleteId))
  //       .then(() => dispatch(getShopCartProductsAction()))
  //       .catch(() => dispatch(getShopCartProductsAction()));
  //   }
  // };

  // const clearShopCart = () => {
  //   dispatch(removeAllShopCartProductsAction())
  //     .then(() => dispatch(getShopCartProductsAction()))
  //     .catch(() => dispatch(getShopCartProductsAction()));
  // };

  return (
    <ShopCartComponent
      shopCartProducts={shopCart}
      addCart={addCart}
      deleteFromCart={deleteFromCart}
      setDeleteId={setDeleteId}
      deleteProductTitle={deleteProductTitle}
      setDeleteProductTitle={setDeleteProductTitle}
      confirmModalIsOpen={confirmModalIsOpen}
      setConfirmModalIsOpen={setConfirmModalIsOpen}
      clearShopCart={clearShopCart}
      clearConfirmModalIsOpen={clearConfirmModalIsOpen}
      setClearConfirmModalIsOpen={setClearConfirmModalIsOpen}
      isLoad={isLoad}
      error={error}
      token={token}
    />
  );
};

export default ShopCartContainer;
