import { Alert } from 'antd';
import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import ProductSkeleton from '../../Alerts/ProductSkeleton/ProductSkeleton';
import '../ShopCart.scss';
import { ShopCartProductListProps } from '../types';

const ShopCartProductList: React.FC<ShopCartProductListProps> = ({
  shopCartProducts,
  addCart,
  deleteFromCart,
  setDeleteId,
  deleteProductTitle,
  setDeleteProductTitle,
  confirmModalIsOpen,
  setConfirmModalIsOpen,
  isLoad,
  error,
  token,
}) => {
  return (
    <>
      {isLoad ? (
        <ProductSkeleton productsLength={shopCartProducts.length} />
      ) : !token ? (
        <div>Авторизуйтесь!</div>
      ) : error ? (
        <Alert type="error" message={error} />
      ) : !shopCartProducts.length ? (
        <div>Корзина пуста!</div>
      ) : (
        <ul className="shop-cart__product-list">
          {shopCartProducts.map((shopCart) => {
            const { product, quantity } = shopCart;

            const { title, price, image, id } = product;
            return (
              <li className="shop-cart__product" key={id}>
                <div className="product__image">
                  <img src={image} alt={title} />
                </div>
                <div className="product__text">{title}</div>
                <div className="product__text">{+price * quantity} k</div>
                <div className="quantity__action">
                  <button className="quantity__button">-</button>
                  <div className="product__text">{quantity}</div>
                  <button className="quantity__button" onClick={() => addCart(product)}>
                    +
                  </button>
                </div>
                <div
                  className="shop-cart__delete-button"
                  onClick={() => {
                    setConfirmModalIsOpen(true);
                    setDeleteId(id);
                    setDeleteProductTitle(title);
                  }}
                >
                  Удалить из корзины
                </div>
                <DeleteConfirm
                  confirmFunction={deleteFromCart}
                  onClose={() => setConfirmModalIsOpen(false)}
                  isOpen={confirmModalIsOpen}
                  text="Вы уверены что хотите удалить данный товар из корзины?"
                  productTitle={deleteProductTitle}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ShopCartProductList;
