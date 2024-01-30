import { Alert } from 'antd';
import React from 'react';
import DeleteConfirm from '../../Alerts/DeleteConfirm/DeleteConfirm';
import ProductSkeleton from '../../Alerts/ProductSkeleton/ProductSkeleton';
import styles from '../ShopCart.module.scss';
import { ShopCartProductListProps } from '../types';

const ShopCartProductList: React.FC<ShopCartProductListProps> = ({
  shopCartProducts,
  addCart,
  deleteFromCart,
  setDeleteId,
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
        <ul className={styles.products}>
          {shopCartProducts.map((shopCart) => {
            const { product, quantity } = shopCart;

            const { title, price, image, id } = product;
            return (
              <li className={styles.product} key={id}>
                <div className={styles.product_image}>
                  <img src={image} alt={title} />
                </div>
                <div className={styles.product_text}>{title}</div>
                <div className={styles.product_text}>{+price * quantity} k</div>
                <div className={styles.quantity_action}>
                  <button className={styles.quantity_button}>-</button>
                  <div className={styles.product_text}>{quantity}</div>
                  <button className={styles.quantity_button} onClick={() => addCart(product)}>
                    +
                  </button>
                </div>
                <div
                  className={styles.delete_button}
                  onClick={() => {
                    setConfirmModalIsOpen(true);
                    setDeleteId(id);
                  }}
                >
                  Удалить из корзины
                </div>
                <DeleteConfirm
                  confirmFunction={deleteFromCart}
                  onClose={() => setConfirmModalIsOpen(false)}
                  isOpen={confirmModalIsOpen}
                  text="Вы уверены что хотите удалить данный товар из корзины?"
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
