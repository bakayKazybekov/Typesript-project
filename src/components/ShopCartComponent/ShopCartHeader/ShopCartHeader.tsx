import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import '../ShopCart.scss';
import { ShopCartHeaderProps } from '../types';

const ShopCartHeader: React.FC<ShopCartHeaderProps> = ({
  clearConfirmModalIsOpen,
  setClearConfirmModalIsOpen,
  clearShopCart,
  productsLength,
}) => {
  return (
    <header className="shop-cart__header">
      <div className="shop__cart__title">Корзина</div>
      <button className="shop-cart__clear-button" onClick={() => productsLength && setClearConfirmModalIsOpen(true)}>
        Очистить корзину
      </button>
      <DeleteConfirm
        confirmFunction={clearShopCart}
        onClose={() => setClearConfirmModalIsOpen(false)}
        isOpen={clearConfirmModalIsOpen}
        text="Вы уверены что хотите удалить все товары из корзины?"
      />
    </header>
  );
};

export default ShopCartHeader;
