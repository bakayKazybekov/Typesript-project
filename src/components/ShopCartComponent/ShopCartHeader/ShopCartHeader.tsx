import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import styles from '../ShopCart.module.scss';
import { ShopCartHeaderProps } from '../types';

const ShopCartHeader: React.FC<ShopCartHeaderProps> = ({
  clearConfirmModalIsOpen,
  setClearConfirmModalIsOpen,
  clearShopCart,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.shop_cart_title}>Корзина</div>
      <button className={styles.clear_button} onClick={() => setClearConfirmModalIsOpen(true)}>
        Очистить корзину
      </button>
      <DeleteConfirm
        confirmFunction={clearShopCart}
        onClose={() => setClearConfirmModalIsOpen(false)}
        isOpen={clearConfirmModalIsOpen}
        text="Вы уверены что хотите очистить корзину?"
      />
    </header>
  );
};

export default ShopCartHeader;
