import React from 'react';
import { ProductType, ShopCartProductType } from '../../Types/types';
import ProductSkeleton from '../HomeComponent/ProductsList/ProductSkeleton/ProductSkeleton';
import styles from './ShopCart.module.scss';

export type ShopCartComponentProps = {
  shopCartProducts: ShopCartProductType[];
  addCart: (product: ProductType) => void;
  deleteFromCart: (id: number) => void;
  clearShopCart: () => void;
  isLoad: boolean;
  error?: string;
};

const ShopCartComponent: React.FC<ShopCartComponentProps> = ({
  shopCartProducts,
  addCart,
  deleteFromCart,
  clearShopCart,
  isLoad,
  error,
}) => {
  if (!shopCartProducts.length) return <div className={styles.wrapper}>Корзина пуста!</div>;
  console.log(shopCartProducts);

  return (
    <div className={styles.wrapper}>
      {isLoad ? (
        <ProductSkeleton productsLength={shopCartProducts.length} />
      ) : !shopCartProducts.length ? (
        <div>Корзина пуста!</div>
      ) : (
        <>
          <header className={styles.header}>
            <div className={styles.shop_cart_title}>Корзина</div>
            <button className={styles.clear_button} onClick={clearShopCart}>
              Очистить корзину
            </button>
          </header>
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
                  <div className={styles.product_text}>{price} тыс.</div>
                  <div className={styles.quantity_action}>
                    <button className={styles.quantity_button}>-</button>
                    <div className={styles.product_text}>{quantity}</div>
                    <button className={styles.quantity_button} onClick={() => addCart(product)}>
                      +
                    </button>
                  </div>
                  <div className={styles.delete_button} onClick={() => deleteFromCart(id)}>
                    Удалить из корзины
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default ShopCartComponent;
