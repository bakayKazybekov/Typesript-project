import React from 'react';
import './ShopCart.scss';
import ShopCartHeader from './ShopCartHeader/ShopCartHeader';
import ShopCartProductList from './ShopCartProductList/ShopCartProductList';
import { ShopCartComponentProps } from './types';

const ShopCartComponent: React.FC<ShopCartComponentProps> = ({
  shopCartProducts,
  onCloseError,
  deleteFromCart,
  deleteProduct,
  addCart,
  setDeleteProduct,
  confirmIsOpen,
  setConfirmIsOpen,
  clearShopCart,
  clearConfirmIsOpen,
  setClearConfirmIsOpen,
  error,
  token,
  isLoad,
}) => {
  return (
    <div className="shop-cart__wrapper">
      <ShopCartHeader
        clearConfirmIsOpen={clearConfirmIsOpen}
        onCloseError={onCloseError}
        setClearConfirmIsOpen={setClearConfirmIsOpen}
        clearShopCart={clearShopCart}
        productsLength={shopCartProducts.length}
        token={token}
        error={error}
      />
      <ShopCartProductList
        shopCartProducts={shopCartProducts}
        addCart={addCart}
        deleteFromCart={deleteFromCart}
        deleteProduct={deleteProduct}
        setDeleteProduct={setDeleteProduct}
        confirmIsOpen={confirmIsOpen}
        setConfirmIsOpen={setConfirmIsOpen}
        isLoad={isLoad}
      />
    </div>
  );
};

export default ShopCartComponent;
