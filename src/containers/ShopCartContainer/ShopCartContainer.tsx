import _ from 'lodash';
import { useCallback, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShopCartComponent from '../../components/ShopCartComponent/ShopCartComponent';
import { useAppDispatch, useAppSelector } from '../../hook';
import {
  addShopCartProductsAction,
  deleteShopCartAction,
  getShopCartProductsAction,
  removeAllShopCartAction,
} from '../../store/shopCart/actions';
import { cleanShopCartError, setQuantity } from '../../store/shopCart/slice';
import { ShopCartProductType } from '../../Types/types';

// https://www.npmjs.com/package/redux-persist

const ShopCartContainer = () => {
  const dispatch = useAppDispatch();
  const { shopCart, isLoad, error } = useAppSelector((state) => state.shopCartReducer);

  // Confirm modal states
  const initialQuantity = useRef<number | null>(null);

  const [deleteProduct, setDeleteProduct] = useState<{ title: string; id: number }>({ title: '', id: 0 });
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false);
  const [clearConfirmIsOpen, setClearConfirmIsOpen] = useState<boolean>(false);

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      dispatch(getShopCartProductsAction());
    }
  }, [dispatch, token]);

  const onClick = ({ quantity, id }: { quantity: number; id: number }) => {
    dispatch(addShopCartProductsAction({ product: id, quantity }));
    initialQuantity.current = null;
  };
  const debouncedClick = _.debounce(onClick, 500);

  const addCart = useCallback(
    ({ product, quantity }: ShopCartProductType) => {
      if (initialQuantity.current === null) {
        initialQuantity.current = quantity;
      }
      debouncedClick({ quantity: quantity - initialQuantity.current + 1, id: product.id });
      dispatch(setQuantity(product.id));
    },
    [dispatch],
  );

  const deleteFromCart = useCallback(() => {
    if (deleteProduct.id) {
      dispatch(deleteShopCartAction(deleteProduct.id));
    }
  }, [dispatch, deleteProduct]);

  const clearShopCart = useCallback(() => {
    dispatch(removeAllShopCartAction());
  }, [dispatch]);

  const onCloseError = () => {
    dispatch(cleanShopCartError());
  };

  return (
    <ShopCartComponent
      shopCartProducts={shopCart}
      onCloseError={onCloseError}
      addCart={addCart}
      deleteFromCart={deleteFromCart}
      deleteProduct={deleteProduct}
      setDeleteProduct={setDeleteProduct}
      confirmIsOpen={confirmIsOpen}
      setConfirmIsOpen={setConfirmIsOpen}
      clearShopCart={clearShopCart}
      clearConfirmIsOpen={clearConfirmIsOpen}
      setClearConfirmIsOpen={setClearConfirmIsOpen}
      error={error}
      isLoad={isLoad}
      token={token}
    />
  );
};

export default ShopCartContainer;
