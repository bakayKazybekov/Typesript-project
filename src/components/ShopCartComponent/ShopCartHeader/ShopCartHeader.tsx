import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import '../ShopCart.scss';
import { ShopCartHeaderProps } from '../types';

const ShopCartHeader: React.FC<ShopCartHeaderProps> = ({
  clearConfirmModalIsOpen,
  setClearConfirmModalIsOpen,
  clearShopCart,
}) => {
  return (
    <header className="shop-cart__header">
      <div className="shop__cart__title">Корзина</div>
      <button className="shop-cart__clear-button" onClick={() => setClearConfirmModalIsOpen(true)}>
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
