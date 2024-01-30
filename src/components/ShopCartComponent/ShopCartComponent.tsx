import { Alert } from 'antd';
import React from 'react';
import { ProductType, ShopCartProductType } from '../../Types/types';
import DeleteConfirm from '../Alerts/DeleteConfirm/DeleteConfirm';
import ProductSkeleton from '../Alerts/ProductSkeleton/ProductSkeleton';
import ClearButton from './ClearButton/ClearButton';
import styles from './ShopCart.module.scss';
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
    <div className={styles.wrapper}>
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
