import { Alert } from 'antd';
import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import '../ShopCart.scss';
import { ShopCartHeaderProps } from '../types';

const ShopCartHeader: React.FC<ShopCartHeaderProps> = ({
  clearConfirmIsOpen,
  setClearConfirmIsOpen,
  onCloseError,
  clearShopCart,
  productsLength,
  token,
  error,
}) => {
  if (!token) {
    return <div>Вы не авторизованы!</div>;
  } else if (!productsLength) {
    return <div>Корзина пуста!</div>;
  }
  return (
    <header className="shop-cart__header">
      <div className="shop-cart__error">
        {!!error && <Alert type="error" message={error} closable onClose={onCloseError} />}
      </div>
      <div className="shop__cart__title">Корзина</div>
      <button className="shop-cart__clear-button" onClick={() => setClearConfirmIsOpen(true)}>
        Очистить корзину
      </button>
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
