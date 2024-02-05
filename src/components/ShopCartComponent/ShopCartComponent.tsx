import React from 'react';
import './ShopCart.scss';
import ShopCartHeader from './ShopCartHeader/ShopCartHeader';
import ShopCartProductList from './ShopCartProductList/ShopCartProductList';
import { ShopCartComponentProps } from './types';

const ShopCartComponent: React.FC<ShopCartComponentProps> = ({
  shopCartProducts,
  addCart,
  deleteFromCart,
  deleteProduct,
  setDeleteProduct,
  confirmIsOpen,
  setConfirmIsOpen,
  clearShopCart,
  clearConfirmIsOpen,
  setClearConfirmIsOpen,
  isLoad,
  error,
  token,
}) => {
  return (
    <div className="shop-cart__wrapper">
      <ShopCartHeader
        clearConfirmIsOpen={clearConfirmIsOpen}
        setClearConfirmIsOpen={setClearConfirmIsOpen}
        clearShopCart={clearShopCart}
        productsLength={shopCartProducts.length}
      />
      <ShopCartProductList
        shopCartProducts={shopCartProducts}
        isLoad={isLoad}
        error={error}
        addCart={addCart}
        deleteFromCart={deleteFromCart}
        deleteProduct={deleteProduct}
        setDeleteProduct={setDeleteProduct}
        confirmIsOpen={confirmIsOpen}
        setConfirmIsOpen={setConfirmIsOpen}
        token={token}
      />
    </div>
  );
};

export default ShopCartComponent;
