import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import '../ShopCart.scss';
import { ShopCartHeaderProps } from '../types';

const ShopCartHeader: React.FC<ShopCartHeaderProps> = ({
  clearConfirmIsOpen,
  setClearConfirmIsOpen,
  clearShopCart,
  productsLength,
}) => {
  return (
    <header className="shop-cart__header">
      <div className="shop__cart__title">Корзина</div>
      {productsLength ? (
        <button className="shop-cart__clear-button" onClick={() => setClearConfirmIsOpen(true)}>
          Очистить корзину
        </button>
      ) : (
        <div>Корзина пуста!</div>
      )}
      <DeleteConfirm
        confirmFunction={clearShopCart}
        onClose={() => setClearConfirmIsOpen(false)}
        isOpen={clearConfirmIsOpen}
        text="Вы уверены что хотите удалить все товары из корзины?"
      />
    </header>
  );
};

export default ShopCartHeader;
