import React from 'react';
import './ShopCart.scss';
import ShopCartHeader from './ShopCartHeader/ShopCartHeader';
import ShopCartProductList from './ShopCartProductList/ShopCartProductList';
import { ShopCartComponentProps } from './types';

const ShopCartComponent: React.FC<ShopCartComponentProps> = ({
  shopCartProducts,
  addCart,
  deleteFromCart,
  setDeleteId,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  clearShopCart,
  clearConfirmModalIsOpen,
  setClearConfirmModalIsOpen,
  isLoad,
  error,
  token,
}) => {
  return (
    <div className="shop-cart__wrapper">
      <ShopCartHeader
        clearConfirmModalIsOpen={clearConfirmModalIsOpen}
        setClearConfirmModalIsOpen={setClearConfirmModalIsOpen}
        clearShopCart={clearShopCart}
      />
      <ShopCartProductList
        shopCartProducts={shopCartProducts}
        isLoad={isLoad}
        error={error}
        addCart={addCart}
        deleteFromCart={deleteFromCart}
        setDeleteId={setDeleteId}
        confirmModalIsOpen={confirmModalIsOpen}
        setConfirmModalIsOpen={setConfirmModalIsOpen}
        token={token}
      />
    </div>
  );
};

export default ShopCartComponent;
